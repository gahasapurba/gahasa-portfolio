import React, { useState, useEffect } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { ExternalLink, Sparkles, Menu, X, Sun, Moon, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled || mobileMenuOpen ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.85rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand with Profile Photo Avatar */}
        <a
          href="#about"
          onClick={triggerCelebration}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'var(--text-main)',
            minWidth: 0
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, #f59e0b, #38bdf8)',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.35)',
              flexShrink: 0
            }}
          >
            <img
              src={PERSONAL_DATA.avatar}
              alt={PERSONAL_DATA.shortName}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                background: '#22c55e',
                border: '2px solid var(--bg-dark)'
              }}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {PERSONAL_DATA.shortName}
              <span style={{ color: 'var(--gold-light)', fontSize: '0.75rem' }}>★</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Bank Mandiri Wholesale IT
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="btn btn-secondary"
              style={{
                padding: '0.45rem 0.65rem',
                fontSize: '0.8rem',
                borderRadius: '8px'
              }}
            >
              {theme === 'dark' ? <Sun size={15} color="var(--gold-light)" /> : <Moon size={15} color="var(--cyan-accent)" />}
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_DATA.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary nav-action-btn"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
            >
              <FileText size={13} />
              <span>CV / Resume</span>
            </a>

            {/* Linktree Button */}
            <a
              href={PERSONAL_DATA.linktree}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary nav-action-btn"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
            >
              <span>Linktree</span>
              <ExternalLink size={13} />
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="btn btn-primary nav-action-btn"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
            >
              <Sparkles size={13} />
              <span>Contact</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--border-subtle)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            padding: '1.25rem 1.5rem',
            background: 'var(--bg-dark)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-gold)'
          }}
          className="mobile-drawer"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.65rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{l.label}</span>
              <span style={{ color: 'var(--gold-light)', fontSize: '0.8rem' }}>&rarr;</span>
            </a>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginTop: '0.5rem' }}>
            <a
              href={PERSONAL_DATA.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.65rem', fontSize: '0.85rem' }}
            >
              <FileText size={14} />
              <span>CV / Resume</span>
            </a>
            <a
              href={PERSONAL_DATA.linktree}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.65rem', fontSize: '0.85rem' }}
            >
              <span>Linktree</span>
              <ExternalLink size={14} />
            </a>
            <a
              href={PERSONAL_DATA.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.65rem', fontSize: '0.85rem', gridColumn: 'span 2' }}
            >
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ padding: '0.65rem', fontSize: '0.85rem', gridColumn: 'span 2' }}
            >
              <span>Contact Directly</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: inline-flex !important;
          }
          .nav-action-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
