"use client"
import { useEffect, useState } from "react"
import {
  Code2, Server, Database, Cloud, Brain, Users,
  Lightbulb, TrendingUp, Wrench, GitBranch, Smartphone, BarChart3,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getCategories = (t: (en: string, pt: string) => string) => [
  {
    title: t("Core Stack", "Stack Principal"),
    icon: Code2,
    color: "text-blue-400",
    border: "border-blue-400/20",
    skills: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "CEO & Founder", "Product Strategy"],
  },
  {
    title: t("Backend", "Backend"),
    icon: Server,
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    skills: ["FastAPI", "Node.js", "REST API", "WebSockets", "Celery", "Redis", "JWT Auth"],
  },
  {
    title: t("Frontend", "Frontend"),
    icon: Smartphone,
    color: "text-indigo-400",
    border: "border-indigo-400/20",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Zustand"],
  },
  {
    title: t("Databases", "Bancos de Dados"),
    icon: Database,
    color: "text-purple-400",
    border: "border-purple-400/20",
    skills: ["PostgreSQL", "SQLite", "Redis", "SQLAlchemy", "Alembic", "Prisma"],
  },
  {
    title: t("DevOps & Cloud", "DevOps & Cloud"),
    icon: Cloud,
    color: "text-green-400",
    border: "border-green-400/20",
    skills: ["Docker", "Linux", "Nginx", "GitHub Actions", "GCP", "VPS Deployment"],
  },
  {
    title: t("Data & AI", "Dados & IA"),
    icon: Brain,
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    skills: ["Pandas", "Scikit-learn", "TensorFlow", "Jupyter", "Matplotlib", "SQL Analytics"],
  },
  {
    title: t("Leadership & Business", "Liderança & Negócios"),
    icon: Users,
    color: "text-orange-400",
    border: "border-orange-400/20",
    skills: [t("Team Building", "Formação de Times"), t("Decision Making", "Tomada de Decisão"), t("Entrepreneurship", "Empreendedorismo"), "OKRs", t("Hiring", "Contratação")],
  },
  {
    title: t("Product & Design", "Produto & Design"),
    icon: Lightbulb,
    color: "text-pink-400",
    border: "border-pink-400/20",
    skills: ["Figma", t("UX Research", "Pesquisa UX"), t("Roadmapping", "Roadmapping"), t("User Stories", "User Stories"), t("Wireframing", "Wireframing"), t("A/B Testing", "Testes A/B")],
  },
  {
    title: t("Growth & Strategy", "Crescimento & Estratégia"),
    icon: TrendingUp,
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    skills: [t("Go-to-Market", "Go-to-Market"), "Pricing", t("Sales Strategy", "Estratégia de Vendas"), "SaaS Metrics", "MRR/ARR", t("Customer Success", "Sucesso do Cliente")],
  },
  {
    title: t("Tools & Workflow", "Ferramentas & Workflow"),
    icon: Wrench,
    color: "text-slate-400",
    border: "border-slate-400/20",
    skills: ["Git", "GitHub", "Linear", "Notion", "Slack", "Postman", "VSCode"],
  },
  {
    title: t("Analytics", "Analytics"),
    icon: BarChart3,
    color: "text-teal-400",
    border: "border-teal-400/20",
    skills: ["Google Analytics", "Metabase", "Power BI", "Excel/Sheets", t("Dashboard Design", "Design de Dashboards")],
  },
  {
    title: t("Collaboration", "Colaboração"),
    icon: GitBranch,
    color: "text-rose-400",
    border: "border-rose-400/20",
    skills: ["Git Flow", "Code Review", "Agile/Scrum", t("Remote Work", "Trabalho Remoto"), "PR Reviews"],
  },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const el = document.getElementById("skills")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const categories = getCategories(t)

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">{t("Expertise", "Especialidades")}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("Skills & ", "Habilidades & ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t("Technologies", "Tecnologias")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.title} className={`glass border ${cat.border} rounded-2xl p-5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`glass border ${cat.border} rounded-xl p-2`}>
                      <Icon size={18} className={cat.color} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="glass border border-white/10 rounded-lg px-2.5 py-1 text-white/70 text-xs hover:text-white/90 hover:border-white/20 transition-colors duration-200">
                        {skill}
                      </span>
                    ))}
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
