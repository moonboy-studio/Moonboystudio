import { MessageCircle } from 'lucide-react'

const DISCORD = 'https://discord.gg/T9EsUSScp'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem',
      textAlign: 'center',
      background: 'var(--bg2)',
    }}>
      <div className="gradient-text-blue" style={{
        fontFamily: 'Orbitron, monospace', fontSize: '1.1rem', fontWeight: 700,
        marginBottom: '0.75rem',
      }}>
        Moonboy Studio
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Websites, Designs &amp; Discord Servers — Built for Creators
      </p>
      <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: '1px solid var(--border2)',
        padding: '9px 20px', borderRadius: 10,
        color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500,
        transition: 'background 0.2s, border-color 0.2s',
        marginBottom: '1.5rem',
      }}>
        <MessageCircle size={16} /> Join our Discord
      </a>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
        &copy; 2025–2026 Moonboy Studio. All rights reserved.
      </p>
    </footer>
  )
}
