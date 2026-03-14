import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={100}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200} id="about">
        <AboutSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={300} id="experience">
        <ExperienceSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={400} id="projects">
        <ProjectsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={500} id="skills">
        <SkillsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={600} id="education">
        <EducationSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={700}>
        <Footer />
      </ScrollFadeWrapper>
    </main>
  )
}
