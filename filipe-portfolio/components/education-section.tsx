"use client"
import { useEffect, useState } from "react"
import { GraduationCap, Brain, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getEducation = (t: (en: string, pt: string) => string) => [
  {
    institution: "Le Wagon",
    degree: t("Data Science & Artificial Intelligence", "Data Science & Inteligência Artificial"),
    period: "2022",
    description: t(
      "Intensive 9-week bootcamp covering machine learning, deep learning, data engineering and real-world model deployment. Built an end-to-end ML project from data collection to production API.",
      "Bootcamp intensivo de 9 semanas cobrindo machine learning, deep learning, engenharia de dados e deploy de modelos no mundo real. Construiu um projeto de ML de ponta a ponta, da coleta de dados à API em produção."
    ),
    icon: Brain,
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    badge: t("Certified", "Certificado"),
  },
  {
    institution: t("UFES – Federal University of Espírito Santo", "UFES – Universidade Federal do Espírito Santo"),
    degree: t("Bachelor's in Physics", "Bacharelado em Física"),
    period: "2018 – 2022",
    description: t(
      "Strong analytical and mathematical foundation. Developed rigorous problem-solving skills, computational physics, and scientific research methodology.",
      "Forte base analítica e matemática. Desenvolveu habilidades de resolução de problemas rigorosa, física computacional e metodologia de pesquisa científica."
    ),
    icon: GraduationCap,
    color: "text-blue-400",
    border: "border-blue-400/30",
    badge: t("Graduate", "Graduado"),
  },
]

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    const el = document.getElementById("education")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const education = getEducation(t)

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">{t("Background", "Formação")}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("Education & ", "Educação & ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t("Certifications", "Certificações")}
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => {
              const Icon = edu.icon
              return (
                <div key={i} className={`glass border ${edu.border} rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group`}>
                  <div className="flex items-start gap-5">
                    <div className={`glass border ${edu.border} rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} className={edu.color} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-white font-bold text-base">{edu.degree}</h3>
                          <p className={`font-semibold ${edu.color} text-sm`}>{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/50 text-xs">{edu.period}</span>
                          <span className={`glass border ${edu.border} rounded-full px-2.5 py-0.5 text-xs font-medium ${edu.color} flex items-center gap-1`}>
                            <Award size={10} />
                            {edu.badge}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{edu.description}</p>
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
