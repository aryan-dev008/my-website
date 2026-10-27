import React from 'react';
import { ArrowDown, Github, Mail, MapPin, Terminal, Database, Code, CheckCircle2, Sparkles, ExternalLink, FileText } from 'lucide-react';
import HeroThreeScene from './HeroThreeScene';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyber-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Pitch & Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-void-850/90 border border-cyber-purple/30 backdrop-blur-md w-fit shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              <span className="text-xs font-mono text-cyber-lavender tracking-wide">
                Available for internships &amp; software projects
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-lavender uppercase tracking-widest">
                <Terminal className="w-3.5 h-3.5 text-cyber-purple" />
                <span>Hello friend, I'm</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-300 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
              
              <div className="text-base sm:text-lg font-mono text-slate-300 flex flex-wrap items-center gap-2 pt-1">
                <span className="text-cyber-lavender font-semibold">Backend Developer</span>
                <span className="text-cyber-purple font-bold">//</span>
                <span className="text-slate-400">Python</span>
                <span className="text-cyber-purple">•</span>
                <span className="text-slate-400">MySQL</span>
                <span className="text-cyber-purple">•</span>
                <span className="text-slate-400">Clean Code</span>
              </div>
            </div>

            {/* Academic Credential Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-void-850/60 border border-white/5 px-3 py-2 rounded-lg w-fit">
              <div className="w-2 h-2 rounded-sm bg-cyber-purple" />
              <span>{personalData.degree}</span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyber-lavender" />
                {personalData.location}
              </span>
            </div>

            {/* Summary Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Crafting scalable backend architectures, high-performance database schemas, and clean object-oriented systems. Dedicated to writing predictable code, automating complex pipelines, and solving hard algorithmic problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-indigo text-white font-medium text-xs sm:text-sm font-mono tracking-wide shadow-[0_4px_25px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_35px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-purple-400/30 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-5 py-3 rounded-xl bg-cyber-purple/20 hover:bg-cyber-purple/35 text-cyber-lavender hover:text-white font-mono text-xs sm:text-sm tracking-wide border border-cyber-purple/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-[0_4px_20px_rgba(124,58,237,0.2)]"
                  title="View Curriculum Vitae & Resume"
                >
                  <FileText className="w-4 h-4 text-cyber-lavender" />
                  <span>Resume / CV</span>
                </button>
              )}

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 rounded-xl bg-void-850 hover:bg-void-800 text-slate-200 hover:text-white font-mono text-xs sm:text-sm tracking-wide border border-white/10 hover:border-cyber-purple/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyber-lavender" />
                <span>Get In Touch</span>
              </button>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-void-850 hover:bg-void-800 text-slate-300 hover:text-white border border-white/10 hover:border-cyber-purple/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                title="View GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Skills Badges Row */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mr-1">
                Core Stack:
              </span>
              {[
                { name: 'Python', color: 'bg-blue-500' },
                { name: 'MySQL', color: 'bg-amber-500' },
                { name: 'OOP Architecture', color: 'bg-emerald-500' },
                { name: 'Clean Code', color: 'bg-purple-500' },
                { name: 'GitHub', color: 'bg-cyan-500' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-void-850/80 border border-white/5 text-[11px] font-mono text-slate-300"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive 3D WebGL Scene & Authentic Avatar Card */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* The 3D WebGL Canvas Scene */}
            <div className="w-full relative rounded-2xl glass-panel p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-cyber-purple/20">
              <div className="absolute top-3 left-4 flex items-center gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] font-mono text-slate-400">core_system.3d</span>
              </div>
              
              <HeroThreeScene />
            </div>

            {/* Authentic Portrait Card */}
            <div className="w-full glass-panel-subtle rounded-xl p-4 border border-white/10 flex items-center gap-4 hover:border-cyber-purple/40 transition-all duration-300 group">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyber-purple/60 p-0.5 bg-gradient-to-tr from-cyber-purple to-indigo-500 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-void-950 border-2 border-emerald-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-mono truncate">
                    {personalData.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <p className="text-xs text-cyber-lavender font-mono truncate">
                  B.Tech CSE Core Student
                </p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  Dehradun, Uttarakhand, India
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
