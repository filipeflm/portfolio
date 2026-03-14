"use client"
import { useEffect, useState } from "react"
import { Building2, Briefcase, Code2, Server, Brain } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getExperiences = (t: (en: string, pt: string) => string) => [
  {
    company: "Estoki",
    role: t("CEO & Founder", "CEO & Fundador"),
    period: t("2023 – Present", "2023 – Presente"),
    type: t("Full-time", "Tempo integral"),
    icon: Building2,
    color: "text-blue-400",
    bg: "border-blue-400/30",
    description: t(
      "Co-founded and lead Estoki — a WMS & Logistics SaaS platform. Help build the entire platform from scratch: multi-tenant architecture, fleet management, warehouse control, executive dashboards, mobile app and API integrations.",
      "Co-fundei e lidero a Estoki — uma plataforma SaaS de WMS & Logística. Ajudo a construir toda a plataforma do zero: arquitetura multi-tenant, gestão de frota, controle de armazém, dashboards executivos, app mobile e integrações de API."
    ),
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    company: t("PetroSync", "PetroSync"),
    role: t("Backend Developer", "Desenvolvedor Backend"),
    period: "2022 – 2023",
    type: t("Contract", "Contrato"),
    icon: Server,
    color: "text-cyan-400",
    bg: "border-cyan-400/30",
    description: t(
      "Developed backend integrations and data pipelines for the oil & gas sector, focusing on reliability and performance at scale.",
      "Desenvolveu integrações backend e pipelines de dados para o setor de óleo & gás, com foco em confiabilidade e performance em escala."
    ),
    stack: ["Python", "FastAPI", "PostgreSQL", "REST API"],
  },
  {
    company: t("Freelance", "Freelancer"),
    role: t("Full-Stack Developer", "Desenvolvedor Full-Stack"),
    period: "2020 – 2022",
    type: t("Self-employed", "Autônomo"),
    icon: Code2,
    color: "text-indigo-400",
    bg: "border-indigo-400/30",
    description: t(
      "Built web applications, automation scripts and data analysis solutions for multiple clients across different industries.",
      "Construiu aplicações web, scripts de automação e soluções de análise de dados para clientes de diferentes setores."
    ),
    stack: ["Python", "React", "Node.js", "PostgreSQL"],
  },
  {
    company: "Le Wagon",
    role: t("Data Science & AI", "Data Science & IA"),
    period: "2022",
    type: t("Bootcamp", "Bootcamp"),
    icon: Brain,
    color: "text-green-400",
    bg: "border-green-400/30",
    description: t(
      "Intensive 9-week bootcamp covering machine learning, deep learning, data engineering and real-world ML deployments.",
      "Bootcamp intensivo de 9 semanas cobrindo machine learning, deep learning, engenharia de dados e deploys de ML no mundo real."
    ),
    stack: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "GCP"],
  },
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const el = document.getElementById("experience")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const experiences = getExperiences(t)

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">{t("Career", "Carreira")}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("Professional", "Experiência")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t("Experience", "Profissional")}
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-cyan-400/30 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => {
                const Icon = exp.icon
                return (
                  <div key={i} className="relative flex gap-6 group">
                    <div className="relative z-10 hidden sm:flex flex-col items-center">
                      <div className={`w-16 h-16 glass rounded-2xl border ${exp.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className={exp.color} />
                      </div>
                    </div>

                    <div className="flex-1 glass border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <p className={`font-semibold ${exp.color} text-sm`}>{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <span className="text-white/50 text-xs">{exp.period}</span>
                          <span className="glass border border-white/10 rounded-full px-2.5 py-0.5 text-white/60 text-xs">{exp.type}</span>
                        </div>
                      </div>

                      <p className="text-white/65 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <span key={tech} className="glass border border-white/10 rounded-lg px-2.5 py-1 text-white/70 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Briefcase icon at the bottom of the timeline */}
          <div className="hidden sm:flex justify-start pl-4 mt-4">
            <div className="w-8 h-8 glass rounded-full border border-white/10 flex items-center justify-center">
              <Briefcase size={14} className="text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
