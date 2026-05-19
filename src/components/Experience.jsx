import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

const jobs = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'Qalibrated Systems Limited',
    period: 'Oct 2025 – Present',
    location: 'Nairobi, Kenya',
    color: '#63b3ed',
    highlights: [
      'Built the weighbridge management platform with real-time operations, ANPR camera integrations, and hardware APIs for automated vehicle detection and scale readings',
      'Led calibration workflow automation covering intake, approvals, LPO processing, technician assignments, lab work orders, and automated PDF certificate generation aligned with ISO 9001:2015',
      'Designed SLA-driven internal and external helpdesk portals with ticket lifecycle tracking, escalation workflows, and automation rules',
      'Developed modular ERP services across Helpdesk, Fleet, Technical Service, Calibration, and Project Management modules',
      'Deployed containerized services via Docker, Kubernetes, and GitHub Actions CI/CD pipelines',
    ],
    stack: ['React.js', 'TypeScript', 'C#', '.NET', 'PostgreSQL', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    role: 'Software Engineer — Full Stack',
    company: 'Agrinfo Kenya Co. LTD',
    period: 'Apr 2024 – Sep 2024',
    location: 'Nairobi, Kenya',
    color: '#68d391',
    highlights: [
      'Led architecture and deployment of Agrinfo Connect, an agribusiness operations and workflow management platform',
      'Engineered RBAC authentication for farmers, aggregators, and internal teams with traceable sourcing workflows',
      'Built real-time operational monitoring, reconciliation pipelines, and centralized reporting dashboards',
      'Developed automated financial reporting generating P&L statements, balance sheets, and asset registers',
    ],
    stack: ['React.js', 'JavaScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git'],
  },
  {
    role: 'Networking & Systems Technician',
    company: 'Masterspace Solutions',
    period: 'Jan 2024 – Jul 2024',
    location: 'Nairobi, Kenya',
    color: '#b794f4',
    highlights: [
      'Installed and maintained LAN infrastructure including routers, switches, cabling, and wireless access points for business environments',
      'Diagnosed and resolved hardware, software, and network-level issues, minimizing client system downtime',
      'Managed user accounts, access controls, and endpoint configuration aligned with IT security policies',
    ],
    stack: ['LAN Infrastructure', 'Network Diagnostics', 'Systems Maintenance', 'Endpoint Config'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section" ref={ref} style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>
            Building production systems across enterprise, agribusiness, and industrial environments.
          </p>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '0.5rem' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute', left: '1.6rem', top: '0.6rem', bottom: '2rem',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(99,179,237,0.5) 0%, rgba(99,179,237,0.05) 100%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
              >
                {/* Timeline dot */}
                <div style={{ width: '3.2rem', flexShrink: 0, display: 'flex', justifyContent: 'center', paddingTop: '1.4rem' }}>
                  <div style={{
                    width: 11, height: 11, borderRadius: '50%',
                    background: job.color,
                    border: '2px solid var(--bg-2)',
                    boxShadow: `0 0 12px ${job.color}88`,
                  }} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ borderColor: `${job.color}33` }}
                  style={{
                    flex: 1,
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderLeft: `3px solid ${job.color}`,
                    borderRadius: 'var(--radius)',
                    padding: '1.75rem 2rem',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>
                        {job.role}
                      </h3>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: job.color, fontWeight: 500 }}>
                        {job.company}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                        <Calendar size={11} /> {job.period}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                        <MapPin size={11} /> {job.location}
                      </div>
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {job.highlights.map((h, hi) => (
                      <li key={hi} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                        <span style={{ color: job.color, marginTop: '0.2rem', flexShrink: 0 }}>→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                    {job.stack.map(s => (
                      <span key={s} className="tag" style={{ fontSize: '0.68rem' }}>{s}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience .container > div:last-child > div > div { gap: 1rem !important; }
          #experience .container > div:last-child > div > div > div:last-child { padding: 1.25rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
