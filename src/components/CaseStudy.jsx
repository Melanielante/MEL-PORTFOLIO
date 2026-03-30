import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, Lightbulb, Layers, Wrench, BookOpen } from 'lucide-react'

const steps = [
  {
    icon: <AlertCircle size={18} />,
    label: 'Problem',
    color: '#fc8181',
    content: 'Businesses struggle with managing operations across disconnected systems—finance, HR, inventory, and workflows living in silos, creating inefficiencies and data loss.',
  },
  {
    icon: <Lightbulb size={18} />,
    label: 'Solution',
    color: '#f6ad55',
    content: 'Built a modular ERP system where each business domain is a self-contained module. Unified access, shared data, consistent UX—one system to run the whole operation.',
  },
  {
    icon: <Layers size={18} />,
    label: 'Architecture',
    color: '#63b3ed',
    content: 'Clean Architecture with strict separation: Domain layer holds business logic, Application layer handles use cases, Infrastructure layer manages persistence and external services.',
  },
  {
    icon: <Wrench size={18} />,
    label: 'Challenges',
    color: '#b794f4',
    content: 'Structuring interdependent modules without coupling them. Managing cross-module dependencies without leaking domain logic. Designing role-based access across an evolving feature set.',
  },
  {
    icon: <BookOpen size={18} />,
    label: 'Learnings',
    color: '#68d391',
    content: 'System design decisions made early have compounding effects. Clean architecture feels like overhead until it saves you at scale. Real-world scalability requires intentional constraint from day one.',
  },
]

export default function CaseStudy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="casestudy" className="section" ref={ref} style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="section-label">Deep Dive</p>
          <h2 className="section-title">ERP System — Case Study</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.75 }}>
            Most junior developers show projects. This is how I <em style={{ color: 'var(--text)' }}>think</em> through them—the problem, the architecture, the decisions, the lessons.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: '1rem', bottom: '1rem',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent), var(--purple), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                {/* Dot */}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: step.color + '15',
                  border: `1px solid ${step.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: step.color, flexShrink: 0,
                  marginLeft: '-2rem',
                  position: 'relative', zIndex: 1,
                }}>
                  {step.icon}
                </div>

                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '1.4rem 1.6rem',
                  flex: 1,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                    color: step.color, marginBottom: '0.6rem',
                  }}>
                    {step.label}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    {step.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75 }}
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            background: 'linear-gradient(135deg, rgba(99,179,237,0.06), rgba(183,148,244,0.06))',
            border: '1px solid rgba(99,179,237,0.2)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>
            KEY INSIGHT
          </div>
          <p style={{ color: 'var(--text)', lineHeight: 1.75, maxWidth: '680px' }}>
            Building an ERP isn't just about features—it's about understanding that every architectural decision is a long-term commitment. Designing with Clean Architecture from day one meant the system could grow without fighting itself.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
