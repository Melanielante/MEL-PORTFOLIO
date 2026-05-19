import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.1rem 0',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        background: scrolled ? 'rgba(8,11,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
          MEL<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.05em',
              color: 'var(--text-muted)', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', display: 'none' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}
          >
            <div className="container" style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 700px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
