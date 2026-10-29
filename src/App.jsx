import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsAndEducation from './components/SkillsAndEducation';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Background Atmosphere */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      <div className="bg-grid-pattern" />

      {/* Main Layout */}
      <Navbar />
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
