"use client"
import { Linkedin, Github, Mail, MapPin, Building2, ArrowUp, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const navSections = (t: (en: string, pt: string) => string) => [
  { label: t("Home", "Início"), id: "home" },
  { label: t("About", "Sobre"), id: "about" },
  { label: t("Experience", "Experiência"), id: "experience" },
  { label: t("Projects", "Projetos"), id: "projects" },
  { label: t("Skills", "Habilidades"), id: "skills" },
  { label: t("Education", "Educação"), id: "education" },
  { label: t("Contact", "Contato"), id: "contact" },
]

export default function Footer() {
  const { t, language, setLanguage } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer id="contact" className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">F</span>
              <span className="text-xl font-bold text-white">Filipe Monteiro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 size={14} className="text-blue-400" />
              <span className="text-sm text-blue-400 font-semibold">{t("CEO & Founder · Estoki", "CEO & Fundador · Estoki")}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {t(
                "Co-building the future of WMS & Logistics with technology, product thinking and engineering excellence.",
                "Co-construindo o futuro do WMS & Logística com tecnologia, pensamento de produto e excelência em engenharia."
              )}
            </p>

            {/* Language toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="flex items-center gap-2 glass border border-white/10 hover:border-blue-400/40 text-white/60 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Globe size={14} />
              {language === "en" ? "🇧🇷 Português" : "🇺🇸 English"}
            </button>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{t("Navigation", "Navegação")}</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navSections(t).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{t("Get in Touch", "Contato")}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-blue-400 shrink-0" />
                Vila Velha, ES — Brazil
              </div>
              <a
                href="mailto:filipemonteiro@estoki.com.br"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail size={14} className="text-cyan-400 shrink-0" />
                filipemonteiro@estoki.com.br
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/filipe-monteiro-a0b018300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass border border-white/10 hover:border-blue-400/40 p-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Linkedin size={18} className="text-white/60 hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass border border-white/10 hover:border-white/30 p-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Github size={18} className="text-white/60 hover:text-white" />
                </a>
                <a
                  href="mailto:filipemonteiro@estoki.com.br"
                  className="glass border border-white/10 hover:border-cyan-400/40 p-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Mail size={18} className="text-white/60 hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Filipe Monteiro. {t("All rights reserved.", "Todos os direitos reservados.")}
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="glass border border-white/10 hover:border-white/20 p-2 rounded-xl transition-all duration-200 hover:scale-105"
          >
            <ArrowUp size={16} className="text-white/50 hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
