"use client"

import { Linkedin, Mail, MapPin, ArrowUp, Building2, ExternalLink } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
  ]

  return (
    <footer id="contact" className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Filipe Monteiro</h3>
            {/* CEO badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 mb-4">
              <Building2 size={11} className="text-blue-400" />
              <span className="text-xs text-blue-400 font-semibold">CEO &amp; Founder · Estoki</span>
            </div>
            <p className="text-white/50 text-sm mb-4">
              Co-building the future of WMS &amp; Logistics with technology, product thinking and engineering excellence.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} />
              <span>Vila Velha, ES — Brazil</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/filipe-monteiro-a0b018300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors duration-200 group"
              >
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/10 group-hover:border-blue-400/40 transition-all duration-200">
                  <Linkedin size={14} className="text-blue-400" />
                </div>
                <span>LinkedIn Profile</span>
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:filipe@estoki.com.br"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors duration-200 group"
              >
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/10 group-hover:border-cyan-400/40 transition-all duration-200">
                  <Mail size={14} className="text-cyan-400" />
                </div>
                <span>filipe@estoki.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">
            © 2025 Filipe Monteiro · CEO &amp; Founder of Estoki. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="glass border border-white/10 hover:border-white/30 text-white/50 hover:text-white rounded-xl px-4 py-2 text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
