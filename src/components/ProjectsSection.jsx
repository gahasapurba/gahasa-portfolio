import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { ExternalLink, Layers, Terminal, Sparkles, Check, Lock, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Fintech & Enterprise', 'Fullstack Web', 'Personal Software', 'Enterprise System', 'Tool & Utility'];

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
    <section id="projects" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="section-tag">Engineered Artifacts</div>
        <h2 className="section-title">Featured Projects & Systems</h2>
        <p className="section-desc">
          Architectural solutions ranging from wholesale banking API contracts to high-throughput live event systems, regional e-commerce, and educational platforms.
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
                background: activeFilter === cat ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'var(--border-subtle)',
                color: activeFilter === cat ? '#000' : 'var(--text-muted)',
                border: activeFilter === cat ? '1px solid #f59e0b' : '1px solid var(--border-subtle)',
                cursor: 'pointer',
                fontWeight: activeFilter === cat ? 700 : 500
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.75rem' }}>
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Optional Project Screenshot Thumbnail */}
                {p.image && (
                  <div
                    style={{
                      width: '100%',
                      height: '180px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--panel-inner-bg)'
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                )}

                {/* Header Tag & Metrics */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge badge-gold">{p.category}</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)' }}>
                    {p.metrics}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontFamily: 'var(--font-mono)', marginBottom: '0.9rem' }}>
                  {p.subtitle}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', background: 'var(--panel-inner-bg)', padding: '1rem', borderRadius: '10px' }}>
                  {p.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
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
                      href={p.links.demo || p.links.github || PERSONAL_DATA.github}
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
                      <span>{p.links.demo ? 'Live Demo / Portal' : 'Repository / Demo'}</span>
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
