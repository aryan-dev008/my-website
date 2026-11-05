import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 10px dot: responsive, tight spring
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 1000 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 1000 });

  // 32px ring: gentle lagging lerp/spring
  const ringX = useSpring(mouseX, { damping: 26, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 26, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Check if touch device or prefers-reduced-motion
    const pointerQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabled = () => {
      const isTouch = pointerQuery.matches;
      const isReduced = motionQuery.matches;

      if (isTouch || isReduced) {
        setEnabled(false);
        document.body.classList.remove('has-custom-cursor');
      } else {
        setEnabled(true);
        document.body.classList.add('has-custom-cursor');
      }
    };

    updateEnabled();

    pointerQuery.addEventListener?.('change', updateEnabled);
    motionQuery.addEventListener?.('change', updateEnabled);

    return () => {
      pointerQuery.removeEventListener?.('change', updateEnabled);
      motionQuery.removeEventListener?.('change', updateEnabled);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactiveEl = target && target.closest?.(
        'a, button, [role="button"], .tilt-card, [data-cursor-hover], input, textarea, select, label'
      );
      setIsHovered(!!interactiveEl);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [enabled, isVisible, mouseX, mouseY]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* 10px Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyber-lavender pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(167,139,250,0.6)]"
        style={{
          x: dotX,
          y: dotY,
        }}
      />

      {/* 32px Lagging Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-cyber-purple/50"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(196, 181, 253, 0.9)' : 'rgba(139, 92, 246, 0.45)',
          backgroundColor: isHovered ? 'rgba(124, 58, 237, 0.12)' : 'rgba(124, 58, 237, 0)',
        }}
        transition={{
          duration: 0.18,
          ease: 'easeOut',
        }}
      />
    </>
  );
}
