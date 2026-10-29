import React, { useState, useEffect } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { Terminal, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.1 },
      colors: ['#f59e0b', '#fbbf24', '#38bdf8', '#ffffff']
    });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a
          href="#"
          onClick={triggerCelebration}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f59e0b, #b45309)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              color: '#000',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
            }}
          >
            GP
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              {PERSONAL_DATA.shortName}
              <span style={{ color: 'var(--gold-light)', fontSize: '0.75rem' }}>★</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
              Bank Mandiri Wholesale IT
            </div>
          </div>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'none', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>About</a>
            <a href="#experience" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>Experience</a>
            <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>Projects</a>
            <a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>Skills</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            >
              <span>LinkedIn</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            >
              <Sparkles size={14} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
