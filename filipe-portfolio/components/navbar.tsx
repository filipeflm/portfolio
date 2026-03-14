"use client"
import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, FolderOpen, Zap, GraduationCap, Mail, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: t("Home", "Início"), id: "home", icon: Home },
    { label: t("About", "Sobre"), id: "about", icon: User },
    { label: t("Experience", "Experiência"), id: "experience", icon: Briefcase },
    { label: t("Projects", "Projetos"), id: "projects", icon: FolderOpen },
    { label: t("Skills", "Habilidades"), id: "skills", icon: Zap },
    { label: t("Education", "Educação"), id: "education", icon: GraduationCap },
    { label: t("Contact", "Contato"), id: "contact", icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 outline-none ${isScrolled ? "px-4 py-2" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-3 border border-white/15"
            : "px-4 sm:px-6 py-4 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-xl font-bold text-white md:flex-1 text-left flex items-center gap-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">F</span>
            Filipe Monteiro
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 mr-4">
            {navLinks.slice(0, -1).map((link) => {
              const Icon = link.icon
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/65 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm"
                >
                  <Icon size={13} className="opacity-70" />
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Right side: Language toggle + Contact CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-white/10 hover:border-blue-400/40 text-white/60 hover:text-white transition-all duration-200 text-sm font-medium"
              title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
            >
              <Globe size={13} />
              <span>{language === "en" ? "PT" : "EN"}</span>
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="glass border border-white/20 hover:border-blue-400/50 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm flex items-center gap-1.5 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Mail size={13} />
              {t("Contact", "Contato")}
            </button>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg glass border border-white/10 hover:border-blue-400/40 text-white/60 hover:text-white transition-all duration-200 text-xs font-medium"
            >
              <Globe size={11} />
              {language === "en" ? "PT" : "EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-xl p-4 border border-white/10">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm"
                  >
                    <Icon size={16} className="text-blue-400" />
                    {link.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
