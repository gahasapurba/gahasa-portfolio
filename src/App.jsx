import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsAndEducation from './components/SkillsAndEducation';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gahasa_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gahasa_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Background Atmosphere */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      <div className="bg-grid-pattern" />

      {/* Main Layout */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsAndEducation />
      </main>
      <ContactFooter />
    </div>
  );
}
