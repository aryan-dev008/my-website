import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundStars from './components/BackgroundStars';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-void-900 text-slate-100 selection:bg-cyber-purple selection:text-white">
      {/* 3D Cosmic Starfield Canvas */}
      <BackgroundStars />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About onOpenResume={() => setIsResumeOpen(true)} />
          <Expertise />
          <Skills />
          <Projects />
          <Roadmap />
          <Contact />
        </main>

        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Dedicated Curriculum Vitae & Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </div>
  );
}
