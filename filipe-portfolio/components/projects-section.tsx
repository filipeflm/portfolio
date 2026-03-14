"use client"
import { useEffect, useState } from "react"
import { ExternalLink, Building2, Code2, BarChart3, Boxes } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getProjects = (t: (en: string, pt: string) => string) => [
  {
    title: "Estoki",
    subtitle: t("WMS & Logistics SaaS Platform", "Plataforma SaaS de WMS & Logística"),
    description: t(
      "SaaS platform co-built with FastAPI, React and PostgreSQL. Multi-tenant architecture with fleet management, warehouse control, executive dashboards, mobile app and API integrations for logistics operations.",
      "Plataforma SaaS co-construída com FastAPI, React e PostgreSQL. Arquitetura multi-tenant com gestão de frota, controle de armazém, dashboards executivos, app mobile e integrações de API para operações logísticas."
    ),
    tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    icon: Building2,
    color: "text-blue-400",
    bg: "from-blue-600/10 to-cyan-600/10",
    border: "border-blue-400/20",
    link: "https://estoki.com.br",
    badge: t("Live · Founder", "Live · Fundador"),
  },
  {
    title: t("Data Pipeline Automation", "Automação de Pipeline de Dados"),
    subtitle: t("Oil & Gas Sector", "Setor de Óleo & Gás"),
    description: t(
      "Developed robust data ingestion and transformation pipelines for industrial monitoring in the oil & gas sector. High reliability, real-time processing and integration with legacy systems.",
      "Desenvolveu pipelines robustos de ingestão e transformação de dados para monitoramento industrial no setor de óleo & gás. Alta confiabilidade, processamento em tempo real e integração com sistemas legados."
    ),
    tech: ["Python", "FastAPI", "PostgreSQL", "REST API", "Docker"],
    icon: BarChart3,
    color: "text-cyan-400",
    bg: "from-cyan-600/10 to-indigo-600/10",
    border: "border-cyan-400/20",
    badge: t("Production", "Produção"),
  },
  {
    title: t("Inventory Management System", "Sistema de Gestão de Inventário"),
    subtitle: t("Custom ERP Module", "Módulo ERP Customizado"),
    description: t(
      "Full-stack inventory and stock control system built for a mid-size distribution company. Real-time tracking, barcode scanning support, and automated reorder alerts.",
      "Sistema de controle de inventário e estoque full-stack construído para uma empresa de distribuição de médio porte. Rastreamento em tempo real, suporte a leitura de código de barras e alertas automatizados de reabastecimento."
    ),
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    icon: Boxes,
    color: "text-indigo-400",
    bg: "from-indigo-600/10 to-purple-600/10",
    border: "border-indigo-400/20",
    badge: t("Delivered", "Entregue"),
  },
  {
    title: t("ML Demand Forecasting", "Previsão de Demanda com ML"),
    subtitle: t("Data Science · Le Wagon", "Data Science · Le Wagon"),
    description: t(
      "Machine learning model for demand forecasting using time-series analysis. Built during the Le Wagon Data Science bootcamp, achieving strong accuracy on real retail datasets.",
      "Modelo de machine learning para previsão de demanda usando análise de séries temporais. Construído durante o bootcamp de Data Science da Le Wagon, com forte acurácia em datasets reais de varejo."
    ),
    tech: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "GCP"],
    icon: Code2,
    color: "text-green-400",
    bg: "from-green-600/10 to-emerald-600/10",
    border: "border-green-400/20",
    badge: t("Academic", "Acadêmico"),
  },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const el = document.getElementById("projects")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const projects = getProjects(t)

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">{t("Portfolio", "Portfólio")}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("Featured ", "Projetos em ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t("Projects", "Destaque")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon
              return (
                <div
                  key={i}
                  className={`relative group glass border ${project.border} rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} rounded-2xl opacity-50`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`glass border ${project.border} rounded-xl p-2.5`}>
                          <Icon size={22} className={project.color} />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-base">{project.title}</h3>
                          <p className={`text-xs font-medium ${project.color}`}>{project.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`glass border ${project.border} rounded-full px-2.5 py-0.5 text-xs font-medium ${project.color}`}>
                          {project.badge}
                        </span>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="glass border border-white/10 hover:border-white/30 p-1.5 rounded-lg transition-all duration-200"
                          >
                            <ExternalLink size={14} className="text-white/50 hover:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-white/65 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
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
      </div>
    </section>
  )
}
