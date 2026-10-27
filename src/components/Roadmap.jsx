import React from 'react';
import { Milestone, CheckCircle2, Clock, Compass, ArrowRight } from 'lucide-react';
import { roadmapData } from '../data/portfolioData';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-850 border border-cyber-purple/30 text-cyber-lavender text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-cyber-purple" />
            <span>PROGRESSION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic &amp; Professional <span className="bg-gradient-to-r from-cyber-lavender to-cyber-indigo bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
            Core Computer Science, Backend Systems &amp; Data Science progression.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {roadmapData.map((stage, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative ${
                stage.isCurrent
                  ? 'glass-panel border-cyber-purple/50 shadow-[0_0_35px_rgba(124,58,237,0.2)]'
                  : 'bg-void-850/60 border-white/10 hover:border-white/20'
              }`}
            >
              {stage.isCurrent && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-cyber-purple text-[10px] font-mono text-white font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current Focus
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyber-lavender" />
                    {stage.timeline}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      stage.isCurrent
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-void-900 text-slate-400 border border-white/5'
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-sans mb-2">
                  {stage.phase}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                  {stage.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {stage.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          stage.isCurrent ? 'text-cyber-lavender' : 'text-slate-500'
                        }`}
                      />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase 0{idx + 1}</span>
                <Milestone className="w-3.5 h-3.5 text-cyber-purple" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
