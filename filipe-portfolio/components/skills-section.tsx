"use client"

import { useEffect, useState } from "react"
import {
  Building2, Code2, Database, Cpu, Smartphone, BarChart3, TrendingUp,
  Users, Lightbulb, Globe, Package, Zap
} from "lucide-react"

interface SkillGroup {
  category: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  iconColor: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Leadership & Business",
    icon: Building2,
    iconColor: "text-blue-400",
    skills: ["CEO / Founder", "Product Strategy", "Go-to-Market", "Team Building", "Startup Operations", "SaaS Business Model"],
  },
  {
    category: "Product & Design",
    icon: Lightbulb,
    iconColor: "text-yellow-400",
    skills: ["Product Management", "UX Thinking", "Roadmap Planning", "Customer Discovery", "Feature Prioritization"],
  },
  {
    category: "Languages & Frameworks",
    icon: Code2,
    iconColor: "text-cyan-400",
    skills: ["Python", "TypeScript", "React.js", "FastAPI", "SQL"],
  },
  {
    category: "Databases",
    icon: Database,
    iconColor: "text-green-400",
    skills: ["PostgreSQL", "Materialized Views", "Query Optimization", "Data Modeling"],
  },
  {
    category: "SaaS & Architecture",
    icon: Zap,
    iconColor: "text-indigo-400",
    skills: ["Multi-Tenant SaaS", "API Design", "Microservices", "OAuth", "System Architecture"],
  },
  {
    category: "DevOps & Deployment",
    icon: Cpu,
    iconColor: "text-orange-400",
    skills: ["Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    iconColor: "text-pink-400",
    skills: ["Mobile Apps (Capacitor)", "React Native (basics)", "Progressive Web Apps"],
  },
  {
    category: "Data & Analytics",
    icon: BarChart3,
    iconColor: "text-purple-400",
    skills: ["Data Analysis", "Machine Learning", "KPIs & Dashboards", "Mathematical Modeling", "Data Pipelines"],
  },
  {
    category: "Logistics Domain",
    icon: Package,
    iconColor: "text-teal-400",
    skills: ["WMS", "Fleet Management", "Inventory Control", "Pallet Tracking", "Fuel Management", "Incident Management"],
  },
  {
    category: "Growth & Strategy",
    icon: TrendingUp,
    iconColor: "text-rose-400",
    skills: ["Business Strategy", "OKRs", "Operational Excellence", "Process Improvement", "Reporting Systems"],
  },
  {
    category: "Collaboration",
    icon: Users,
    iconColor: "text-sky-400",
    skills: ["Team Leadership", "Cross-functional Work", "Client Relations", "Technical Communication"],
  },
  {
    category: "Languages",
    icon: Globe,
    iconColor: "text-emerald-400",
    skills: ["Portuguese (Native)", "English (Professional)", "Italian (Basic)"],
  },
]

const coreStack = [
  { name: "CEO & Founder", color: "from-blue-400 to-blue-600" },
  { name: "Python", color: "from-yellow-400 to-yellow-600" },
  { name: "FastAPI", color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
  { name: "React", color: "from-cyan-400 to-cyan-600" },
  { name: "TypeScript", color: "from-blue-500 to-indigo-600" },
  { name: "Docker", color: "from-sky-400 to-sky-600" },
  { name: "SaaS Dev", color: "from-pink-400 to-rose-600" },
  { name: "Product Strategy", color: "from-purple-400 to-purple-600" },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-white/50 mt-4 text-sm max-w-xl mx-auto">
            From business strategy and product vision to technical implementation — a full-stack founder&apos;s toolkit
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon
            return (
              <div
                key={group.category}
                className={`glass border border-white/10 rounded-2xl p-5 hover:border-blue-400/30 transition-all duration-500 group ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${groupIndex * 60}ms` }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <Icon size={15} className={group.iconColor} />
                  </div>
                  <h3 className="text-sm font-semibold text-white/90 leading-tight">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 glass rounded-lg text-xs text-white/65 border border-white/10 group-hover:border-blue-400/20 hover:text-white hover:border-blue-400/40 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Core stack highlight */}
        <div
          className={`mt-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="glass border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6 text-center">Core Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 rounded-xl text-white font-semibold text-sm hover:scale-105 transition-transform duration-200 cursor-default border border-white/10"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
