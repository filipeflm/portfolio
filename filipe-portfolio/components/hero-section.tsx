"use client"
import { Card } from "@/components/ui/card"
import { ChevronDown, Rocket, Building2, BarChart3, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="flex items-center justify-center mb-6 sm:mb-10">
          <div className="glass rounded-full px-4 py-2 border border-white/10 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-sm sm:text-base text-white/75">
              {t("CEO & Founder · ", "CEO & Fundador · ")}<strong className="text-white">Estoki</strong> 👋
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="relative mb-8 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-2 mb-6">
            Filipe Monteiro
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white/80 block mt-3">
              {t("CEO & Founder of ", "CEO & Fundador da ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Estoki
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t(
              "Co-building a WMS & Logistics SaaS from the ground up — driving product vision, technical architecture, team leadership and go-to-market strategy.",
              "Co-construindo um SaaS de WMS & Logística do zero — liderando visão de produto, arquitetura técnica, times e estratégia de go-to-market."
            )}
          </p>

          {/* Floating badges */}
          <div className="absolute -top-6 sm:-top-10 -left-2 sm:-left-10 animate-float-1 transform rotate-12 hidden sm:block">
            <div className="glass glass-hover rounded-xl px-3 py-2 border border-white/10 text-xs font-medium text-white/80 flex items-center gap-1.5">
              <Building2 size={12} className="text-blue-400" /> {t("SaaS Founder", "Fundador SaaS")}
            </div>
          </div>
          <div className="absolute top-8 sm:top-12 -left-4 sm:-left-12 animate-float-2 transform -rotate-6 hidden sm:block">
            <div className="glass glass-hover rounded-xl px-3 py-2 border border-white/10 text-xs font-medium text-white/80 flex items-center gap-1.5">
              <Rocket size={12} className="text-cyan-400" /> {t("Product Builder", "Construtor de Produto")}
            </div>
          </div>
          <div className="absolute -top-6 sm:-top-10 -right-2 sm:-right-10 animate-float-3 transform -rotate-12 hidden sm:block">
            <div className="glass glass-hover rounded-xl px-3 py-2 border border-white/10 text-xs font-medium text-white/80 flex items-center gap-1.5">
              <BarChart3 size={12} className="text-indigo-400" /> {t("Logistics Tech", "Tecnologia Logística")}
            </div>
          </div>
          <div className="absolute top-8 sm:top-12 -right-4 sm:-right-12 animate-float-1 transform rotate-6 hidden sm:block">
            <div className="glass glass-hover rounded-xl px-3 py-2 border border-white/10 text-xs font-medium text-white/80 flex items-center gap-1.5">
              <Users size={12} className="text-green-400" /> {t("Team Leader", "Líder de Time")}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-12 px-2">
          <Card className="glass glass-hover p-3 sm:p-5 text-center group border border-white/10">
            <div className="flex flex-col items-center gap-2">
              <Building2 className="w-7 h-7 text-blue-400 transition-all duration-300 group-hover:scale-110" />
              <p className="font-semibold text-white text-xs sm:text-sm leading-snug">
                {t("CEO & Founder · Estoki", "CEO & Fundador · Estoki")}
              </p>
            </div>
          </Card>
          <Card className="glass glass-hover p-3 sm:p-5 text-center group border border-white/10">
            <div className="flex flex-col items-center gap-2">
              <Rocket className="w-7 h-7 text-cyan-400 transition-all duration-300 group-hover:scale-110" />
              <p className="font-semibold text-white text-xs sm:text-sm leading-snug">
                WMS &amp; Logistics SaaS
              </p>
            </div>
          </Card>
          <Card className="glass glass-hover p-3 sm:p-5 text-center group border border-white/10">
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="w-7 h-7 text-indigo-400 transition-all duration-300 group-hover:scale-110" />
              <p className="font-semibold text-white text-xs sm:text-sm leading-snug">
                {t("10+ Systems in Production", "10+ Sistemas em Produção")}
              </p>
            </div>
          </Card>
          <Card className="glass glass-hover p-3 sm:p-5 text-center group border border-white/10">
            <div className="flex flex-col items-center gap-2">
              <Users className="w-7 h-7 text-green-400 transition-all duration-300 group-hover:scale-110" />
              <p className="font-semibold text-white text-xs sm:text-sm leading-snug">
                {t("Product · Tech · Leadership", "Produto · Tech · Liderança")}
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
          >
            <Rocket size={16} />
            {t("View Projects", "Ver Projetos")}
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 glass border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Users size={16} />
            {t("Get in Touch", "Entrar em Contato")}
          </button>
        </div>

        {/* Scroll Button */}
        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
          >
            <div className="glass glass-hover rounded-full p-3 sm:p-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-white/10">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white/80 transition-colors duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
