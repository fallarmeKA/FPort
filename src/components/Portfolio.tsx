import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './portfolio/Navigation';
import HeroSection from './portfolio/HeroSection';
import DesignWorkSection from './portfolio/DesignWorkSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ThemeToggle from './portfolio/ThemeToggle';
import ContactSection from './portfolio/ContactSection';
import ServicesSection from './portfolio/ServicesSection';
import TestimonialsSection from './portfolio/TestimonialsSection';
import AboutTimelineSection from './portfolio/AboutTimelineSection';
import ThemeCustomizer from './portfolio/ThemeCustomizer';
import ResumeSection from './portfolio/ResumeSection';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <ThemeCustomizer isDark={isDark} onToggle={toggleTheme} />
      
      <main>
        <HeroSection />
        <AboutTimelineSection />
        <ServicesSection />
        <DesignWorkSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <TestimonialsSection /> */}
        <div className="py-10 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <ResumeSection />
          </div>
        </div>
        <ContactSection />
      </main>
    </div>
  );
}