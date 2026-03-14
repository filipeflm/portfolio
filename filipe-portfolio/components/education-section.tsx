"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Calendar } from "lucide-react"

interface Education {
  institution: string
  degree: string
  field: string
  period: string
  description?: string
}

const educations: Education[] = [
  {
    institution: "Le Wagon",
    degree: "Certification",
    field: "Data Science & Artificial Intelligence",
    period: "Feb 2023 – May 2023",
    description:
      "Intensive bootcamp focused on data science, machine learning and AI. Practical projects with Python, pandas, scikit-learn, deep learning and deployment.",
  },
  {
    institution: "Universidade Federal do Espírito Santo",
    degree: "Bachelor's Degree",
    field: "Physics",
    period: "Feb 2016 – Jan 2022",
    description:
      "Solid foundation in analytical thinking, mathematical modeling and problem solving. Studies in classical and quantum physics, applied mathematics and computational physics.",
  },
]

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const element = document.getElementById("education")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Education &amp; Certifications
          </h2>
        </div>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className={`glass border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-400/30 transition-all duration-700 group ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center group-hover:border-blue-400/30 transition-all duration-300">
                    <GraduationCap size={22} className="text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-blue-400 font-medium">
                        {edu.degree} · {edu.field}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs whitespace-nowrap">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-white/60 text-sm leading-relaxed">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
