'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle, Menu } from 'lucide-react'

const DISCORD = 'https://discord.gg/T9EsUSScp'

const navItems = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about',     label: 'About' },
  { href: '/faq',       label: 'FAQ' },
  { href: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(5,5,8,0.85)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem',
        height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="moon-logo" />
          <span className="gradient-text-blue" style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1.1rem' }}>
            Moonboy Studio
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0 }}
            className="desktop-nav">
          {navItems.map(item => (
            <li key={item.href}>
              <Link href={item.href} style={{
                fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: pathname === item.href ? 'var(--text)' : 'var(--muted)',
                transition: 'color 0.2s',
              }}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, var(--neon), var(--neon2))',
              color: '#fff', padding: '7px 18px', borderRadius: 8,
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
              transition: 'box-shadow 0.2s, opacity 0.2s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <MessageCircle size={14} /> Discord
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: 6 }}>
          <Menu size={22} />
        </button>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Sidebar */}
      <div style={{
        position: 'fixed', top: 0, right: sidebarOpen ? 0 : -280, bottom: 0, zIndex: 201,
        width: 280,
        background: 'var(--bg2)',
        borderLeft: '1px solid var(--border2)',
        transition: 'right 0.35s cubic-bezier(0.4,0,0.2,1)',
        padding: '5rem 2rem 2rem',
      }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: 'block', padding: '12px 14px', borderRadius: 10,
                  fontWeight: 500,
                  color: pathname === item.href ? 'var(--text)' : 'var(--muted)',
                  background: pathname === item.href ? 'var(--card2)' : 'transparent',
                  transition: 'background 0.2s, color 0.2s',
                }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={DISCORD} target="_blank" rel="noopener noreferrer"
          onClick={() => setSidebarOpen(false)}
          style={{
            marginTop: '1.5rem', display: 'block', textAlign: 'center',
            background: 'linear-gradient(135deg, var(--neon), var(--neon2))',
            color: '#fff', padding: 12, borderRadius: 10,
            fontWeight: 600, fontSize: '0.9rem',
            boxShadow: 'var(--glow)',
          }}>
          Join Our Discord
        </a>
      </div>

      <style>{`
        .hamburger-btn { display: none !important; }
        .desktop-nav { display: flex !important; }
        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}
