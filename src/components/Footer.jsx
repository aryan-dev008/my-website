import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2, FileText } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-void-950 border-t border-white/5 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider">
              <Code2 className="w-4 h-4 text-cyber-purple" />
              <span>{personalData.name}</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Backend Developer • Python • MySQL • Clean Architecture
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-2.5 py-1.5 rounded-lg bg-void-900 border border-white/5 hover:border-cyber-purple/40 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                title="View Resume"
              >
                <FileText className="w-3.5 h-3.5 text-cyber-lavender" />
                <span>Resume</span>
              </button>
            )}

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-void-900 border border-white/5 hover:border-cyber-purple/40 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-void-900 border border-white/5 hover:border-cyber-purple/40 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-lg bg-void-900 border border-white/5 hover:border-cyber-purple/40 text-slate-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyber-purple/20 border border-cyber-purple/40 text-cyber-lavender hover:bg-cyber-purple/30 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with clean Python principles &amp; interactive 3D WebGL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
