"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  period: string
  description: string
  skills: string[]
  category: "logistics" | "management" | "analytics" | "saas"
  emoji: string
}

const projects: Project[] = [
  {
    id: "fleet-intelligence",
    title: "Fleet Intelligence with Real-Time Analytics",
    period: "Oct 2025 – Present",
    description:
      "Complete real-time vehicle management and monitoring system with GPS data analysis. Implemented intelligent speed analysis algorithms that reduced false positives by 95%, using temporal pattern analysis to differentiate between overtaking and actual speeding. Built an executive dashboard with KPIs for fuel consumption, profitability per vehicle, and automatic alerts for speed, idle time and battery level. Developed a driver performance ranking system with weighted metrics and consumption analysis by vehicle and region, with distance calculations using the Haversine formula for precise route analysis. Integrated with an external GPS tracking API with intelligent caching and fallback for historical data.",
    skills: ["Python", "PostgreSQL", "FastAPI", "GPS API", "Data Analytics"],
    category: "logistics",
    emoji: "🚛",
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System with Entry and Exit Control",
    period: "Oct 2025 – Present",
    description:
      "Complete warehouse management system with full product movement and inventory control. Implemented product registration with categorization, unit of measure control and multiple warehouses. Developed inventory reports with low stock alerts, inventory turnover analysis and identification of stagnant products. Implemented a request and approval system with configurable workflow.",
    skills: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript"],
    category: "management",
    emoji: "🏭",
  },
  {
    id: "executive-dashboard",
    title: "Executive Dashboard with Billing Analytics and KPIs",
    period: "Sep 2025 – Present",
    description:
      "Complete executive dashboard with billing indicators, SLA and operational performance for management. Implemented CT-e (Transport Knowledge) data analysis with complex SQL aggregations. Created monthly evolution visualizations with advanced filters (period, units, payers, freight types). Developed a weight distribution analysis system and status by billing type, providing strategic insights for executive decision-making.",
    skills: ["Python", "FastAPI", "SQL", "React", "Data Visualization"],
    category: "analytics",
    emoji: "📊",
  },
  {
    id: "invoice-verification",
    title: "Invoice Verification and Validation System",
    period: "Aug 2025 – Present",
    description:
      "Invoice verification system with complete data validation and integration with external systems for automatic XML import. Implemented XML parser for electronic invoices (NF-e) with extraction of relevant data and validation of required fields. Built an approval and rejection system with complete change history. Created an interface for comparison between invoice data and system data, facilitating the identification of discrepancies.",
    skills: ["Python", "FastAPI", "XML Processing", "Document Validation"],
    category: "management",
    emoji: "📋",
  },
  {
    id: "workshop-management",
    title: "Workshop and Vehicle Maintenance Management System",
    period: "Aug 2025 – Present",
    description:
      "Complete workshop management system with service order control, including diagnostics, parts used and labor. Implemented workshop product and service registration with inventory and pricing. Created a fleet system with complete maintenance history, scheduling and costs. Developed preventive and corrective maintenance reports with cost analysis per vehicle.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Maintenance Systems"],
    category: "management",
    emoji: "🔧",
  },
  {
    id: "pallet-tracking",
    title: "Pallet Tracking and Management System Between Branches",
    period: "Jul 2025 – Present",
    description:
      "Complete pallet management system for movement control between branches and customers. Implemented batch registration with sequential codes and support for multiple pallet types (Standard, PBR, European, American, Custom). Created an inter-branch transfer system with automatic transfer code generation, receipt confirmation and status tracking. Developed a dashboard with statistics by branch, pending transfers and control of available, in-use and in-transit pallets.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Inventory Management", "Multi-location Systems"],
    category: "logistics",
    emoji: "📦",
  },
  {
    id: "cargo-gamification",
    title: "Operational Cargo Management System with Timer and Gamification",
    period: "May 2025 – Present",
    description:
      "Vehicle loading and unloading management system with a real-time timer and gamification. Implemented a system to motivate the team with justified breaks and net operating time calculation, allowing for precise productivity tracking. Created a performance ranking system with a weighted scoring algorithm (volume 60%, completion rate 20%, consistency 20%) and classification by category (A, B, C, BEGINNER). Developed team management for multiple members and a real-time dashboard with active operations, time metrics and daily statistics. Implemented a 'big screen' system for public display of the ranking, increasing team engagement and productivity.",
    skills: ["Python", "FastAPI", "Real-time", "Gamification"],
    category: "logistics",
    emoji: "🏆",
  },
  {
    id: "estoki-wms",
    title: "Estoki WMS & Logistics Platform",
    period: "Apr 2025 – Present",
    description:
      "Multi-tenant WMS and Logistics SaaS platform co-built with FastAPI, PostgreSQL, React and TypeScript, including fleet management, executive dashboards, mobile apps (Capacitor) and secure auth (JWT/HttpOnly). Implemented optimized analytics with materialized views (up to 30-60x faster in benchmarks). External OAuth/API integrations and automated deployment/release workflows with Docker and GitHub Actions.",
    skills: ["SaaS Development", "Multi-Tenant Management", "FastAPI", "React", "TypeScript", "Docker", "CI/CD", "OAuth"],
    category: "saas",
    emoji: "⚡",
  },
  {
    id: "fueling-control",
    title: "Fueling Control and Consumption Analysis System",
    period: "Apr 2025 – Present",
    description:
      "Vehicle fueling control system with complete registration including type, quantity, price and mileage. Implemented consumption analysis by vehicle and region (State/City) with average consumption calculation and deviation identification. Created fuel expense reports, trend analysis and anomaly identification such as fueling above expected. Developed a dashboard with cost per km metrics and comparison between vehicles.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Data Analytics", "Fuel Management"],
    category: "analytics",
    emoji: "⛽",
  },
  {
    id: "incident-management",
    title: "Operational Incident Registration and Management System",
    period: "May 2025 – Present",
    description:
      "Operational incident registration system with classification by type, severity and category. Implemented complete incident approval and resolution workflow with automatic notifications and responsible assignment. Created incident reports with trend analysis, pattern identification and average resolution time metrics. Developed a dashboard with incident statistics by type, status and period.",
    skills: ["Python", "FastAPI", "Incident Management", "Workflow Systems"],
    category: "management",
    emoji: "🚨",
  },
]

const categories = [
  { id: "all", label: "All", emoji: "🗂️" },
  { id: "saas", label: "SaaS Platform", emoji: "⚡" },
  { id: "logistics", label: "Logistics", emoji: "🚛" },
  { id: "management", label: "Management", emoji: "🏭" },
  { id: "analytics", label: "Analytics", emoji: "📊" },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 },
    )
    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const filtered =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/80" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Systems built for automation, logistics and operations — all running in production
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                    : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`group glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${project.id === "estoki-wms" ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/40 mt-0.5">{project.period}</p>
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-white/30 group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0 mt-1"
                  />
                </div>

                <p className={`text-white/60 text-xs sm:text-sm leading-relaxed transition-all duration-300 ${
                  expanded === project.id ? "" : "line-clamp-3"
                }`}>
                  {project.description}
                </p>

                <p className="text-blue-400/70 text-xs mt-2 hover:text-blue-400">
                  {expanded === project.id ? "▲ Show less" : "▼ Show more"}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 glass rounded-md text-xs text-white/60 border border-white/10 group-hover:border-blue-400/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/filipe-monteiro-a0b018300"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/20 hover:border-blue-400/40 text-white rounded-xl transition-all duration-300 hover:scale-105 text-sm font-medium"
          >
            View all projects on LinkedIn
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
