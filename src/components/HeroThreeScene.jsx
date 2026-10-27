import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroThreeScene() {
  const mountRef = useRef(null);
  const [webGLError, setWebGLError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // SCENE & CAMERA
    const width = mount.clientWidth || 360;
    const height = mount.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    // RENDERER
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      mount.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL is not available:', e);
      setWebGLError(true);
      return;
    }

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x1a103c, 2.5);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4.5, 12);
    purpleLight.position.set(3, 2, 3);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4.0, 12);
    cyanLight.position.set(-3, -2, 2);
    scene.add(cyanLight);

    const coreLight = new THREE.PointLight(0x818cf8, 2.0, 6);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // 3D CORE GROUP
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Faceted Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x181438,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Wireframe Lattice Overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.set(1.01, 1.01, 1.01);
    coreGroup.add(wireMesh);

    // 3. Orbital Ring 1 (Tilted Purple Ring)
    const ring1Geo = new THREE.TorusGeometry(1.5, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // 4. Orbital Ring 2 (Tilted Cyan Ring)
    const ring2Geo = new THREE.TorusGeometry(1.75, 0.018, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    coreGroup.add(ring2);

    // 5. Orbiting Data Beacon Spheres
    const beaconGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    coreGroup.add(beacon);

    const beacon2Geo = new THREE.SphereGeometry(0.05, 16, 16);
    const beacon2Mat = new THREE.MeshBasicMaterial({ color: 0xe879f9 });
    const beacon2 = new THREE.Mesh(beacon2Geo, beacon2Mat);
    coreGroup.add(beacon2);

    // POINTER DRAG & INTERACTION STATE
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.003, y: 0.005 };
    let mouseInfluence = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
      };
    };

    const handlePointerMove = (e) => {
      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      // Pointer influence for camera/tilt
      const rect = mount.getBoundingClientRect();
      const relX = (currentX - rect.left - rect.width / 2) / (rect.width / 2);
      const relY = (currentY - rect.top - rect.height / 2) / (rect.height / 2);
      mouseInfluence.x = relX * 0.4;
      mouseInfluence.y = relY * 0.4;

      if (!isDragging) return;

      const deltaX = currentX - previousMousePosition.x;
      const deltaY = currentY - previousMousePosition.y;

      rotationVelocity.y = deltaX * 0.008;
      rotationVelocity.x = deltaY * 0.008;

      coreGroup.rotation.y += rotationVelocity.y;
      coreGroup.rotation.x += rotationVelocity.x;

      previousMousePosition = { x: currentX, y: currentY };
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);

    dom.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // RESIZE HANDLING
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // INTERSECTION OBSERVER FOR GPU EFFICIENCY (Requirement 6)
    let isVisibleOnScreen = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleOnScreen = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(mount);

    // ANIMATION LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisibleOnScreen || document.hidden) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Damping velocity
      if (!isDragging) {
        rotationVelocity.x *= 0.94;
        rotationVelocity.y *= 0.94;

        if (!prefersReducedMotion) {
          coreGroup.rotation.y += 0.005 + rotationVelocity.y;
          coreGroup.rotation.x += 0.002 + rotationVelocity.x;
        } else {
          coreGroup.rotation.y += rotationVelocity.y;
          coreGroup.rotation.x += rotationVelocity.x;
        }
      }

      // Orbital Rings Rotation
      ring1.rotation.z += 0.01;
      ring2.rotation.z -= 0.008;

      // Orbiting Beacons
      beacon.position.x = Math.cos(time * 1.6) * 1.5;
      beacon.position.y = Math.sin(time * 1.6) * 0.8;
      beacon.position.z = Math.sin(time * 1.6) * 1.5;

      beacon2.position.x = Math.cos(-time * 1.2) * 1.75;
      beacon2.position.y = Math.sin(-time * 1.2) * 1.1;
      beacon2.position.z = Math.sin(-time * 1.2) * 1.3;

      // Subtle float
      coreGroup.position.y = Math.sin(time * 1.4) * 0.08;

      // Smooth camera tilt towards mouse
      camera.position.x += (mouseInfluence.x - camera.position.x) * 0.05;
      camera.position.y += (-mouseInfluence.y - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      dom.removeEventListener('mousedown', handlePointerDown);
      dom.removeEventListener('touchstart', handlePointerDown);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      coreGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
      beacon2Geo.dispose();
      beacon2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  if (webGLError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-48 h-48 rounded-full border-2 border-cyber-purple/40 bg-void-850 flex items-center justify-center relative shadow-[0_0_50px_rgba(124,58,237,0.3)] animate-float-slow">
          <div className="absolute inset-2 rounded-full border border-dashed border-cyber-lavender/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="text-cyber-lavender font-mono text-3xl font-bold">Aryan.dev</div>
        </div>
        <p className="mt-4 text-xs font-mono text-slate-400">Interactive 3D fallback mode</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none relative z-10"
        title="Click & drag to rotate the 3D core"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-void-950/80 border border-cyber-purple/30 text-[11px] font-mono text-cyber-lavender/80 flex items-center gap-2 pointer-events-none z-20 backdrop-blur-md">
        <span className={`w-2 h-2 rounded-full ${isInteracting ? 'bg-cyber-cyan animate-ping' : 'bg-cyber-purple animate-pulse'}`}></span>
        {isInteracting ? 'Interacting in 3D' : 'Drag to rotate 3D core'}
      </div>
    </div>
  );
}
