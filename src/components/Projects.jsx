import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, GitFork } from 'lucide-react'

const featured = {
  title: 'Enterprise ERP & Calibration Platform',
  subtitle: 'Qalibrated Systems Limited',
  description: 'A modular ERP platform supporting helpdesk operations, calibration management, fleet, technical services, and workflow automation using service-oriented architecture.',
  highlights: [
    'End-to-end calibration workflow automation aligned with ISO 9001:2015',
    'SLA-driven helpdesk portals with ticket lifecycle and escalation workflows',
    'Automated PDF certificate generation from calibration datasets and calculation engines',
    'RBAC authorization, reporting dashboards, and PDF/Excel exports across all modules',
  ],
  stack: ['React.js', 'TypeScript', 'C#', '.NET', 'PostgreSQL', 'Docker', 'Kubernetes'],
  github: 'https://github.com/Melanielante/Lante-erp',
  isPrivate: false,
}

const secondary = {
  title: 'ANPR Weighbridge Management System',
  subtitle: 'AI-Powered Vehicle Detection',
  description: 'An AI-powered ANPR system that converts standard IP cameras into intelligent vehicle identification and weighbridge automation using computer vision and OCR pipelines.',
  highlights: [
    'Real-time YOLOv8 + EasyOCR detection from RTSP camera streams',
    'Automated plate extraction populating weighbridge transaction workflows',
    'Gross/tare/net weight processing with live operational dashboards and reporting',
    'Deployed on Linux with systemd services and modular FastAPI backend',
  ],
  stack: ['Python', 'FastAPI', 'PostgreSQL', 'YOLOv8', 'EasyOCR', 'OpenCV', 'RTSP'],
  github: 'https://github.com/Melanielante/ANCR-SYSTEM',
}

const others = [
  {
    title: 'Agrinfo Connect',
    desc: 'Integrated agribusiness operations platform with RBAC, supply chain traceability, automated financial reporting, and real-time operational dashboards.',
    stack: ['React.js', 'Node.js', 'PostgreSQL'],
    color: '#f6ad55',
    status: 'Shipped',
  },
  {
    title: 'Structify',
    desc: 'Collaborative architecture and project management platform for design coordination, project tracking, and document management between architects and stakeholders.',
    stack: ['React.js', 'Node.js', 'PostgreSQL'],
    color: '#63b3ed',
    status: 'Building',
  },
  {
    title: 'Water Watch Africa',
    desc: 'Real-time community reporting platform for monitoring and visualizing water access challenges across underserved regions with geospatial data workflows.',
    stack: ['React.js', 'Flask', 'PostgreSQL'],
    color: '#68d391',
    status: 'Building',
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
                Case Study <ExternalLink size={14} />
              </a>
              <a href={featured.github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
                <GitFork size={14} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
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
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(183,148,244,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '0.2rem 0.6rem',
                borderRadius: '4px', background: 'rgba(183,148,244,0.1)', color: 'var(--purple)',
                border: '1px solid rgba(183,148,244,0.2)',
              }}>
                AI / Computer Vision
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                {secondary.subtitle}
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {secondary.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              {secondary.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem' }}>
            {secondary.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--purple)', marginTop: '0.15rem', flexShrink: 0 }}>→</span>
                {h}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {secondary.stack.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
            <a href={secondary.github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              <GitFork size={14} /> View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {others.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
                <div style={{ width: 32, height: 3, background: p.color, borderRadius: 2 }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem', padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  background: p.status === 'Building' ? 'rgba(104,211,145,0.08)' : 'rgba(246,173,85,0.08)',
                  color: p.status === 'Building' ? 'var(--green)' : 'var(--amber)',
                  border: `1px solid ${p.status === 'Building' ? 'rgba(104,211,145,0.2)' : 'rgba(246,173,85,0.2)'}`,
                }}>
                  {p.status === 'Building' ? '⚡ Building' : '✓ Shipped'}
                </span>
              </div>
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
