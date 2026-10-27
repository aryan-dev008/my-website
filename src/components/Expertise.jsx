import React, { useRef } from 'react';
import { Code, Database, Layers, Cpu, Check, Sparkles } from 'lucide-react';
import { coreExpertise } from '../data/portfolioData';

function TiltCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const getIcon = (name) => {
    switch (name) {
      case 'code':
        return <Code className="w-5 h-5 text-cyber-lavender" />;
      case 'database':
        return <Database className="w-5 h-5 text-cyber-cyan" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Code className="w-5 h-5 text-cyber-lavender" />;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl p-7 bg-void-850/80 border border-white/10 hover:border-cyber-purple/40 transition-all duration-300 tilt-card overflow-hidden group flex flex-col justify-between"
      style={{
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
      }}
    >
      {/* Dynamic Cursor Spotlight Radial Sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(167, 139, 250, 0.12) 0%, transparent 65%)',
        }}
      />

      {/* Top Details */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-void-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyber-purple/40 transition-all duration-200">
            {getIcon(item.icon)}
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-void-900/90 px-2.5 py-1 rounded-full border border-white/5">
            {item.subtitle}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyber-lavender transition-colors mb-2">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
          {item.description}
        </p>
      </div>

      {/* Highlights List */}
      <div className="relative z-10 pt-4 border-t border-white/5">
        <div className="grid grid-cols-2 gap-2">
          {item.highlights.map((hl, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <Check className="w-3 h-3 text-cyber-purple shrink-0" />
              <span className="truncate">{hl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-void-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-850 border border-cyber-purple/30 text-cyber-lavender text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyber-purple" />
            <span>SERVICES &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core <span className="bg-gradient-to-r from-cyber-lavender to-cyber-cyan bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
            Structured methodologies and backend engineering competencies.
          </p>
        </div>

        {/* 2x2 Grid of 3D Kinetic Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreExpertise.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
