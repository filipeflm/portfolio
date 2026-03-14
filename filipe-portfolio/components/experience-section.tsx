"use client"

import { useEffect, useState } from "react"
import { Calendar, Building2, TrendingUp, Code2, BarChart3, Users } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  type: string
  description: string
  skills: string[]
  current?: boolean
  icon: React.ComponentType<{ size?: number; className?: string }>
  iconColor: string
}

const experiences: Experience[] = [
  {
    company: "Estoki",
    role: "CEO & Founder",
    period: "Apr 2025 – Present",
    type: "Full-time",
    description:
      "Co-founded and lead Estoki, a multi-tenant WMS & Logistics SaaS platform. Responsible for product vision, technical architecture, team leadership, commercial strategy and go-to-market execution. Helped build the entire platform from the ground up: fleet management, warehouse control, executive dashboards, mobile apps (Capacitor), OAuth integrations and CI/CD pipelines with Docker and GitHub Actions.",
    skills: ["SaaS Leadership", "Product Strategy", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "CI/CD", "OAuth"],
    current: true,
    icon: Building2,
    iconColor: "text-blue-400",
  },
  {
    company: "LEITE EXPRE",
    role: "Systems Developer",
    period: "2024 – Present",
    type: "Full-time",
    description:
      "Built internal logistics and operations systems from scratch. Developed fleet intelligence with real-time analytics, cargo gamification systems, warehouse management, executive dashboards with KPIs, pallet tracking between branches, fueling control, incident management and invoice verification systems — all running in production.",
    skills: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Data Analytics"],
    current: true,
    icon: TrendingUp,
    iconColor: "text-cyan-400",
  },
  {
    company: "IK Project",
    role: "Developer & Consultant",
    period: "Jan 2022 – Present",
    type: "Freelance",
    description:
      "Development of custom systems and solutions for operations management. APIs, automation pipelines and dashboards for clients across different industries.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Data Analysis"],
    current: true,
    icon: Code2,
    iconColor: "text-indigo-400",
  },
  {
    company: "Freelance",
    role: "Data Analyst",
    period: "Dec 2019 – Present",
    type: "Freelance",
    description:
      "Data analysis, pipeline creation and reporting for decision support. Statistical analyses, visualizations and machine learning models for clients.",
    skills: ["Python", "SQL", "Machine Learning", "Data Visualization"],
    current: true,
    icon: BarChart3,
    iconColor: "text-green-400",
  },
  {
    company: "Leite Express",
    role: "Administrative & Operations",
    period: "2024 – 2025",
    type: "Part-time",
    description:
      "Administrative and operational support. Identified opportunities for internal process improvement, which became the foundation for the systems built at Estoki.",
    skills: ["Operations", "Logistics", "Process Management"],
    current: false,
    icon: Users,
    iconColor: "text-white/50",
  },
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const element = document.getElementById("experience")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <div
                  key={index}
                  className={`relative pl-12 sm:pl-20 transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline icon dot */}
                  <div className="absolute left-1 sm:left-5 top-4 w-7 h-7 rounded-full border border-white/10 bg-black flex items-center justify-center glass">
                    <Icon size={13} className={exp.iconColor} />
                  </div>

                  {/* Card */}
                  <div className="glass border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className={`font-semibold text-sm ${exp.iconColor}`}>{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 text-xs">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                        <span className="px-2 py-0.5 glass rounded-full text-white/40 border border-white/10">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/65 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 glass rounded-lg text-xs text-white/70 border border-white/10 group-hover:border-blue-400/20 transition-colors duration-300"
                        >
                          {skill}
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
