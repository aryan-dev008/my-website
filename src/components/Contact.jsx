import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Trigger confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }

      // Pre-fill mailto link as direct action
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Aryan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-void-950/60">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-850 border border-cyber-purple/30 text-cyber-lavender text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyber-purple" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyber-lavender to-cyber-cyan bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-mono">
            Open for software engineering internships, backend development roles, and open-source collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Main Email Card with 1-Click Copy */}
            <div className="glass-panel rounded-2xl p-6 border border-cyber-purple/30 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-cyber-purple/20 border border-cyber-purple/40 flex items-center justify-center text-cyber-lavender">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-lg bg-void-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Direct Email</h3>
              <a
                href={`mailto:${personalData.email}`}
                className="text-lg font-bold text-white hover:text-cyber-lavender transition-colors font-mono block mt-1 truncate"
              >
                {personalData.email}
              </a>
              <p className="text-xs text-slate-400 font-sans mt-2">
                Click to open your mail client, or copy address directly.
              </p>
            </div>

            {/* Social Channels Card */}
            <div className="glass-panel-subtle rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Connected Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-void-900/80 border border-white/5 hover:border-cyber-purple/40 hover:bg-cyber-purple/10 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-300 group-hover:text-white" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">GitHub</div>
                      <div className="text-[10px] text-slate-400 font-mono">@aryan-dev008</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-lavender" />
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-void-900/80 border border-white/5 hover:border-cyber-purple/40 hover:bg-cyber-purple/10 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">LinkedIn</div>
                      <div className="text-[10px] text-slate-400 font-mono">in/aryan-dev008</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-lavender" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel-subtle rounded-2xl p-5 border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-void-900 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-cyber-lavender" />
              </div>
              <div>
                <div className="text-xs font-bold text-white font-mono">{personalData.location}</div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Open to remote roles, hybrid internships, and global collaboration.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyber-purple/20 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-lavender uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-cyber-purple" />
                <span>Send a Message</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Let's discuss an internship, project, or technical idea.
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono max-w-md mx-auto">
                    Your email client should be opening with your pre-filled inquiry to <span className="text-emerald-400">{personalData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-void-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="name">
                        Your Name <span className="text-cyber-purple">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-void-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple font-sans text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="email">
                        Your Email <span className="text-cyber-purple">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-void-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple font-sans text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="message">
                      Project or Opportunity Details <span className="text-cyber-purple">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the software engineering project, backend role, or collaboration idea..."
                      className="w-full px-4 py-3 rounded-xl bg-void-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple font-sans text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-indigo text-white font-mono text-xs sm:text-sm font-semibold tracking-wider hover:opacity-95 shadow-[0_4px_25px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{submitting ? 'Preparing Transmission...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
