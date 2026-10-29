import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { ExternalLink, Layers, Terminal, Sparkles, Check, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Fintech & Enterprise', 'Personal Software', 'Enterprise System', 'Tool & Utility', 'Fullstack Web'];

  const filteredProjects = activeFilter === 'All'
    ? PERSONAL_DATA.projects
    : PERSONAL_DATA.projects.filter(p => p.category === activeFilter);

  const handleCardClick = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#38bdf8']
    });
  };

  return (
    <section id="projects" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div className="section-tag">Engineered Artifacts</div>
        <h2 className="section-title">Featured Projects & Systems</h2>
        <p className="section-desc">
          Architectural solutions ranging from wholesale banking API contracts to high-throughput live event systems and privacy-focused financial tooling.
        </p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(cat)}
              className="btn"
              style={{
                fontSize: '0.85rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                background: activeFilter === cat ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === cat ? '#000' : 'var(--text-muted)',
                border: activeFilter === cat ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                fontWeight: activeFilter === cat ? 700 : 500
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Tag & Metrics */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-gold">{p.category}</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)' }}>
                    {p.metrics}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                  {p.subtitle}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(0, 0, 0, 0.25)', padding: '1rem', borderRadius: '10px' }}>
                  {p.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <span style={{ color: 'var(--gold-light)', fontWeight: 'bold' }}>&bull;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {p.tech.map((t, tIdx) => (
                    <span key={tIdx} className="badge badge-ghost" style={{ fontSize: '0.7rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                    {p.links.badge}
                  </span>

                  {p.links.internal ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-faint)', fontSize: '0.8rem' }}>
                      <Lock size={12} />
                      <span>Enterprise Internal</span>
                    </div>
                  ) : (
                    <a
                      href={p.links.github || PERSONAL_DATA.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleCardClick}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--gold-light)',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}
                    >
                      <span>Inspect Repository</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
