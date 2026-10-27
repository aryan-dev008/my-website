import React from 'react';
import { BookOpen, Server, BrainCircuit, GraduationCap, MapPin, CheckCircle, Award, FileText } from 'lucide-react';
import { personalData, stats } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-850 border border-cyber-purple/30 text-cyber-lavender text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyber-purple" />
            <span>MY BACKGROUND &amp; VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyber-lavender to-cyber-indigo bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
            Bridging core computer science principles with high-efficiency backend engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait and Personal Details Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden border border-cyber-purple/30 glass-panel p-3 group shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              <div className="relative h-96 sm:h-[420px] rounded-xl overflow-hidden bg-void-950">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-mono">{personalData.name}</h3>
                      <p className="text-xs text-cyber-lavender font-mono">{personalData.degree}</p>
                    </div>
                    <span className="p-2 rounded-lg bg-cyber-purple/20 text-cyber-lavender border border-cyber-purple/40">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyber-purple" />
                    <span>Dehradun, Uttarakhand, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-void-850/80 border border-white/5 hover:border-cyber-purple/30 transition-all duration-200"
                >
                  <div className="text-lg font-bold text-cyber-lavender font-mono">{s.value}</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{s.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{s.detail}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Bio Narrative & Academic Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Story Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyber-purple/20 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-purple uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>The Story So Far</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Constructing robust architectures from first principles.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am an aspiring backend developer and B.Tech in Computer Science and Engineering (Core) student based in India. My academic foundation is complemented by a strong passion for backend systems design, robust automation, and data-driven insights. I thrive on solving complex computational problems through clean code, structured logic, and continuous learning.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I specialize in designing relational database schemas, applying object-oriented design patterns, and engineering backend systems that keep modern applications running flawlessly under the hood.
              </p>

              {onOpenResume && (
                <div className="pt-2">
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-purple/20 hover:bg-cyber-purple/35 text-cyber-lavender hover:text-white border border-cyber-purple/40 text-xs font-mono transition-colors shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Academic Credentials &amp; Resume</span>
                  </button>
                </div>
              )}
            </div>

            {/* Core Pillars */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-1">
                Core Academic &amp; Engineering Pillars:
              </h4>

              {personalData.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-void-850/60 border border-white/5 hover:border-cyber-purple/30 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30 flex items-center justify-center shrink-0 group-hover:bg-cyber-purple/20 transition-colors">
                    {idx === 0 && <BookOpen className="w-5 h-5 text-cyber-lavender" />}
                    {idx === 1 && <Server className="w-5 h-5 text-cyber-lavender" />}
                    {idx === 2 && <BrainCircuit className="w-5 h-5 text-cyber-lavender" />}
                  </div>

                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span>{pillar.label}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </h5>
                    <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
