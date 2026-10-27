import React from 'react';
import { Terminal, Server, Database, BarChart3, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-4 h-4 text-cyber-lavender" />;
      case 'server':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-cyber-cyan" />;
      case 'barChart':
        return <BarChart3 className="w-4 h-4 text-amber-400" />;
      default:
        return <Wrench className="w-4 h-4 text-cyber-lavender" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-850 border border-cyber-purple/30 text-cyber-lavender text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyber-purple" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; <span className="bg-gradient-to-r from-cyber-lavender to-cyber-indigo bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
            Languages, frameworks, databases, and toolsets utilized across backend and data projects.
          </p>
        </div>

        {/* 4-Column Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyber-purple/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-void-900 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-cyber-purple/40 transition-all">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono">{category.title}</h3>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-void-900/60 border border-white/5 hover:border-white/15 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-slate-200 font-sans flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: skill.color }}
                          />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-void-850 text-slate-400 border border-white/5">
                          {skill.badge}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                        <span>Level</span>
                        <span className="text-cyber-lavender font-medium">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Verified in repositories</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
