import React, { useState } from 'react';
import { Github, ExternalLink, Key, Gamepad2, Database, Cpu, Globe, Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { projectsData } from '../data/portfolioData';
import SnakeGameDemo from './SnakeGameDemo';

function PasswordGeneratorDemo() {
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('k$3Lp!wQ9#mZrT2@');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let pool = letters;
    let guaranteed = [letters[Math.floor(Math.random() * letters.length)]];

    if (includeNumbers) {
      pool += numbers;
      guaranteed.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (includeSymbols) {
      pool += symbols;
      guaranteed.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    let result = [...guaranteed];
    for (let i = result.length; i < length; i++) {
      result.push(pool[Math.floor(Math.random() * pool.length)]);
    }

    // Shuffle
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    const finalPass = result.join('');
    setGeneratedPassword(finalPass);
    setCopied(false);

    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#a78bfa', '#38bdf8', '#34d399']
      });
    } catch (e) {
      // ignore
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 p-4 rounded-xl bg-void-950/90 border border-cyber-purple/30 font-mono text-xs text-slate-300 space-y-3">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2 text-cyber-lavender font-semibold">
          <Terminal className="w-4 h-4 text-cyber-purple" />
          <span>Interactive CLI Simulator (Python Engine)</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Live Runtime
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">
            Length: <span className="text-cyber-lavender font-bold">{length}</span> chars
          </label>
          <input
            type="range"
            min="8"
            max="48"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-cyber-purple cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-4 pt-3 sm:pt-0">
          <label className="flex items-center gap-2 cursor-pointer text-[11px]">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="accent-cyber-purple"
            />
            <span>Numbers (0-9)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-[11px]">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="accent-cyber-purple"
            />
            <span>Symbols (!@#$)</span>
          </label>
        </div>
      </div>

      {/* Output Console Box */}
      <div className="flex items-center justify-between p-2.5 rounded-lg bg-void-900 border border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto select-all pr-2">
          <span className="text-emerald-400 font-bold">$</span>
          <span className="text-slate-100 font-mono tracking-wide">{generatedPassword}</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={generate}
            className="px-2.5 py-1 rounded bg-cyber-purple/20 hover:bg-cyber-purple/40 text-cyber-lavender border border-cyber-purple/40 transition-colors flex items-center gap-1 text-[11px]"
            title="Generate new password"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Generate</span>
          </button>

          <button
            onClick={copyToClipboard}
            className="p-1 rounded bg-void-800 hover:bg-void-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'key':
        return <Key className="w-6 h-6 text-amber-400" />;
      case 'gamepad':
        return <Gamepad2 className="w-6 h-6 text-emerald-400" />;
      case 'database':
        return <Database className="w-6 h-6 text-cyber-cyan" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-cyber-lavender" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-purple-400" />;
      default:
        return <Terminal className="w-6 h-6 text-cyber-lavender" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-void-950/40">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-850 border border-cyber-purple/30 text-cyber-lavender text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyber-purple" />
            <span>ENGINEERED SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyber-lavender to-cyber-cyan bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
            Original backend applications, Python security utilities, games, and systems engineering.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Password Generator (Hero Project with Live Interactive Simulator) */}
          {projectsData.slice(0, 1).map((proj) => (
            <div
              key={proj.id}
              className="lg:col-span-12 glass-panel rounded-2xl p-6 sm:p-8 border border-cyber-purple/30 hover:border-cyber-purple/50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                        <Key className="w-3 h-3" />
                        {proj.category}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-void-900 border border-white/10 text-slate-400">
                        Python Standard Library Only
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white font-sans group-hover:text-cyber-lavender transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-cyber-lavender mt-1">{proj.tagline}</p>

                    <p className="mt-4 text-sm text-slate-300 leading-relaxed font-sans">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-void-900 border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-4">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyber-purple hover:bg-cyber-purple/80 text-white text-xs font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source on GitHub</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center">
                  <PasswordGeneratorDemo />
                </div>
              </div>
            </div>
          ))}

          {/* Cards 2-5: Grid of other projects */}
          {projectsData.slice(1).map((proj) => (
            <div
              key={proj.id}
              className={`glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyber-purple/40 transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                proj.isSnakeGame ? 'lg:col-span-12' : 'lg:col-span-6'
              }`}
            >
              <div className={proj.isSnakeGame ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-start' : ''}>
                <div className={proj.isSnakeGame ? 'lg:col-span-7 flex flex-col justify-between' : ''}>
                  <div>
                    {/* Optional Project Thumbnail */}
                    {proj.image && (
                      <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 bg-void-950 group/img">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-void-900/80 backdrop-blur-md text-[10px] font-mono text-cyber-lavender border border-white/10">
                          {proj.category}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      {!proj.image && (
                        <div className="w-12 h-12 rounded-xl bg-void-900 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-cyber-purple/40 transition-all">
                          {getProjectIcon(proj.icon)}
                        </div>
                      )}
                      {!proj.image && (
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-void-900 border border-white/10 text-slate-400">
                          {proj.category}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white font-sans group-hover:text-cyber-lavender transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-cyber-lavender mt-1">{proj.tagline}</p>

                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {proj.description}
                    </p>

                    {proj.stats && (
                      <div className="mt-4 p-2.5 rounded-lg bg-void-900/60 border border-white/5 text-[11px] font-mono text-slate-400">
                        {proj.stats}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-void-900 border border-white/5 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-lavender hover:text-white transition-colors group/link"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Snake Game playable simulation in right column */}
                {proj.isSnakeGame && (
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <SnakeGameDemo />
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
