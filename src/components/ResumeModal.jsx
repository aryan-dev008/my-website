import React from 'react';
import { X, Download, Printer, GraduationCap, MapPin, Mail, Github, Code, Database, Cpu, Award } from 'lucide-react';
import { personalData, stats } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `# ${personalData.name} - Resume
Title: ${personalData.title}
Location: ${personalData.location}
Email: ${personalData.email}
GitHub: ${personalData.github}
Portfolio: ${personalData.livePortfolio}

---
## EDUCATION
- **${personalData.degree}**
  Location: Dehradun, Uttarakhand, India
  Key Focus: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks.

- **Secondary & Senior Secondary Schooling**
  Uttarakhand Board (U.K. Board)

---
## TECHNICAL SKILLS
- **Programming Languages:** Python (Core & OOP), SQL, JavaScript (ES6+), HTML5, CSS3
- **Databases & Storage:** MySQL, PostgreSQL, Relational Schema Design, Normalization (3NF), Query Optimization
- **Backend & Architecture:** Clean Code, SOLID Principles, Modular Systems, REST API Concepts, Defensive Error Handling
- **Data & Tools:** Pandas, NumPy, Git, GitHub, Linux / Command Line, Vite

---
## FEATURED PROJECTS
1. **Secure Password Generator**
   - Repository: https://github.com/aryan-dev008/Password-Genarator
   - Built strictly with Python standard library (random, string).
   - Dynamic entropy generation (8-64 chars), character set toggles, defensive try/except handling.

2. **Classic Snake Game with Pygame**
   - Repository: https://github.com/aryan-dev008/snake-game-
   - OOP class architecture in Python, smooth 60 FPS rendering, anti-180 reverse logic, session score persistence.

3. **Database Management System**
   - Normalized 3NF schemas, foreign-key integrity, parameterized SQL queries defending against SQL injection.

4. **Application Control Core**
   - Scalable backend logic engine with custom exception hierarchies and decoupled modules.

5. **Recreated 3D Developer Portfolio**
   - Repository: https://github.com/aryan-dev008/my-website
   - Interactive Three.js WebGL Cyber Core, 3D kinetic tilt cards, responsive cosmic design.

---
© 2026 ${personalData.name}`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aryan_Dangwal_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-void-950/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-void-900 border border-cyber-purple/40 shadow-[0_20px_70px_rgba(0,0,0,0.8)] z-10 overflow-hidden my-8">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-void-950/90">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyber-purple" />
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Curriculum Vitae / Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-void-850 hover:bg-void-800 text-slate-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyber-lavender" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-cyber-purple hover:bg-cyber-purple/80 text-white border border-purple-400/30 text-xs font-mono flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download Resume Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-void-850 hover:bg-void-800 text-slate-400 hover:text-white transition-colors ml-2"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-slate-200 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              {personalData.name}
            </h1>
            <p className="text-cyber-lavender text-sm font-mono font-medium mt-1">
              {personalData.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyber-purple" />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyber-purple" />
                <a href={`mailto:${personalData.email}`} className="hover:underline">{personalData.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-cyber-purple" />
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/aryan-dev008</a>
              </span>
            </div>
          </div>

          {/* Academic Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyber-lavender uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyber-purple" />
              <span>Education</span>
            </h2>

            <div className="p-4 rounded-xl bg-void-950/70 border border-white/5 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-white font-mono">
                <span>{personalData.degree}</span>
                <span className="text-xs font-normal text-slate-400">Dehradun, India</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Foundational Computer Science curriculum: Data Structures &amp; Algorithms, Object-Oriented Software Design, Database Systems, Computer Networks, and Backend Engineering.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-void-950/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
              <span>Secondary &amp; Senior Secondary Schooling (U.K. Board)</span>
              <span className="text-slate-500">Uttarakhand, India</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyber-lavender uppercase tracking-widest flex items-center gap-2">
              <Code className="w-4 h-4 text-cyber-purple" />
              <span>Core Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-void-950/70 border border-white/5">
                <span className="text-slate-400 block mb-1">Languages:</span>
                <span className="text-white font-semibold">Python (Core &amp; OOP), SQL, JavaScript, HTML5/CSS3</span>
              </div>
              <div className="p-3 rounded-xl bg-void-950/70 border border-white/5">
                <span className="text-slate-400 block mb-1">Databases &amp; Systems:</span>
                <span className="text-white font-semibold">MySQL, PostgreSQL, 3NF Normalization, Query Optimization</span>
              </div>
              <div className="p-3 rounded-xl bg-void-950/70 border border-white/5">
                <span className="text-slate-400 block mb-1">Architecture &amp; Design:</span>
                <span className="text-white font-semibold">SOLID Principles, Clean Code, Modular Logic, REST APIs</span>
              </div>
              <div className="p-3 rounded-xl bg-void-950/70 border border-white/5">
                <span className="text-slate-400 block mb-1">Data Tools &amp; VCS:</span>
                <span className="text-white font-semibold">Pandas, NumPy, Git, GitHub, Linux CLI, Vite</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyber-lavender uppercase tracking-widest flex items-center gap-2">
              <Award className="w-4 h-4 text-cyber-purple" />
              <span>Key Projects Highlight</span>
            </h2>

            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 rounded-xl bg-void-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="font-bold text-white">Secure Password Generator</span>
                  <span className="text-cyber-lavender">Python CLI</span>
                </div>
                <p className="text-slate-300">
                  Customizable password generator engineered strictly with Python's standard library. Features pool validation and dynamic entropy lengths.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-void-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="font-bold text-white">Classic Snake Arcade Game</span>
                  <span className="text-emerald-400">Pygame &amp; OOP</span>
                </div>
                <p className="text-slate-300">
                  Built using clean object-oriented design in Python. Features anti-180 reverse controls, 60 FPS motion, and session high score persistence.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-void-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="font-bold text-white">Database Management System</span>
                  <span className="text-cyber-cyan">Python &amp; MySQL</span>
                </div>
                <p className="text-slate-300">
                  Enterprise-style relational schemas with normalized tables, parameterized statements preventing SQL injection, and CRUD workflows.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
