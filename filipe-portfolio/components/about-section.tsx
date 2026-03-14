"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Linkedin, Mail, MapPin, Building2, Code2, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Building2,
      color: "text-blue-400",
      bg: "border-blue-400/20",
      label: "CEO & Founder",
      sub: "Estoki — WMS & Logistics SaaS",
    },
    {
      icon: Code2,
      color: "text-cyan-400",
      bg: "border-cyan-400/20",
      label: "Full-Stack Builder",
      sub: "Python · FastAPI · React · TypeScript",
    },
    {
      icon: TrendingUp,
      color: "text-indigo-400",
      bg: "border-indigo-400/20",
      label: "Data & Analytics",
      sub: "Certified by Le Wagon · Physics (UFES)",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: photo card */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="relative glass border border-white/10 rounded-3xl p-8 text-center">
                  {/* Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-sm opacity-50" />
                    <Image
                      src="/images/profile.jpg"
                      alt="Filipe Monteiro"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-2 border-white/20 shadow-xl shadow-blue-500/20"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">Filipe Monteiro</h3>

                  {/* CEO badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 mb-4">
                    <Building2 size={12} className="text-blue-400" />
                    <span className="text-sm text-blue-400 font-semibold">CEO &amp; Founder · Estoki</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-6">
                    <MapPin size={14} />
                    <span>Vila Velha, Espírito Santo, Brazil</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {highlights.map((h) => {
                      const Icon = h.icon
                      return (
                        <div
                          key={h.label}
                          className={`flex items-center gap-3 p-2.5 glass rounded-xl border ${h.bg} transition-all duration-200 hover:bg-white/5`}
                        >
                          <Icon size={16} className={h.color} />
                          <div className="text-left">
                            <p className="text-white text-xs font-semibold">{h.label}</p>
                            <p className="text-white/45 text-xs">{h.sub}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: About content */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">About me</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Building the future of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Logistics Tech
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  I&apos;m the <strong className="text-white">CEO &amp; Founder of Estoki</strong>, a WMS &amp;
                  Logistics SaaS platform built from the ground up with a small founding team. I drive every key
                  dimension of the company — from <strong className="text-white">product vision and technical architecture</strong> to
                  team building and commercial strategy.
                </p>
                <p>
                  My background combines deep <strong className="text-white">technical skills</strong> (Python,
                  FastAPI, React, PostgreSQL) with <strong className="text-white">entrepreneurial drive</strong>. I
                  don&apos;t just build features — I help build products that solve real operational problems for
                  logistics and warehouse teams.
                </p>
                <p>
                  Estoki delivers a multi-tenant platform with fleet management, warehouse control,
                  executive dashboards, mobile apps and API integrations. Certified in{" "}
                  <strong className="text-white">Data Science &amp; AI</strong> by Le Wagon and Physics
                  graduate from <strong className="text-white">UFES</strong> — I bring analytical rigor to
                  every decision.
                </p>
              </div>

              {/* Social buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <button
                  className="glass border border-white/20 hover:border-blue-400/40 text-white font-semibold px-6 py-3 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 flex items-center justify-center gap-2"
                  onClick={() => window.open("https://www.linkedin.com/in/filipe-monteiro-a0b018300", "_blank")}
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn
                </button>
                <button
                  className="glass border border-white/20 hover:border-cyan-400/40 text-white font-semibold px-6 py-3 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 flex items-center justify-center gap-2"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
