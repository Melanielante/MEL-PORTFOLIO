import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Lock } from 'lucide-react'

const featured = {
  title: 'ERP System',
  subtitle: 'Private Enterprise Solution',
  description: 'A modular enterprise resource planning system designed to streamline business operations across multiple departments.',
  highlights: [
    'Manages complex business workflows end-to-end',
    'Authentication, authorization & role-based access',
    'Scalable modular architecture across departments',
    'Clean architecture: domain, application & infrastructure layers',
  ],
  stack: ['.NET', 'React', 'PostgreSQL', 'Docker'],
  isPrivate: true,
}

const others = [
  {
    title: 'Mini CRM System',
    desc: 'A customer management app with CRUD functionality and dynamic filtering.',
    stack: ['React', 'JSON Server'],
    color: '#63b3ed',
  },
  {
    title: 'Savings Tracker App',
    desc: 'Personal finance tool for tracking savings goals and progress over time.',
    stack: ['React', 'localStorage'],
    color: '#68d391',
  },
  {
    title: 'Movie App',
    desc: 'A dynamic movie discovery app built with React Router and TMDB API.',
    stack: ['React', 'React Router', 'TMDB API'],
    color: '#b794f4',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="section" ref={ref} style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've Built</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>
            From enterprise systems to focused tools—each project is a step toward better, more impactful software.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow accent */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(99,179,237,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '0.2rem 0.6rem',
                  borderRadius: '4px', background: 'rgba(99,179,237,0.1)', color: 'var(--accent)',
                  border: '1px solid rgba(99,179,237,0.2)',
                }}>
                  ⭐ Featured
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                  {featured.subtitle}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {featured.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {featured.description}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem' }}>
            {featured.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent)', marginTop: '0.15rem', flexShrink: 0 }}>→</span>
                {h}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {featured.stack.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#casestudy" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
                View Case Study <ExternalLink size={14} />
              </a>
              <span className="btn btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', cursor: 'default', opacity: 0.6 }}>
                <Lock size={14} /> Private Repo
              </span>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {others.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: p.color + '44' }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.6rem',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
            >
              <div style={{ width: 32, height: 3, background: p.color, borderRadius: 2, marginBottom: '1.1rem' }} />
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {p.stack.map(s => <span key={s} className="tag" style={{ fontSize: '0.68rem' }}>{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
          #projects .container > div:nth-child(3) > div:first-child > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
