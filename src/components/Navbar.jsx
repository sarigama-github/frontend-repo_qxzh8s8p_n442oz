import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-white transition-colors px-3 py-2"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">BluePixel</span>
          </a>

          <nav className="hidden md:flex items-center text-sm">
            <NavLink href="#services">Usługi</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#testimonials">Opinie</NavLink>
            <NavLink href="#contact">Kontakt</NavLink>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-1 bg-slate-900/60 rounded-xl border border-white/5 p-2">
              <NavLink href="#services" onClick={handleLinkClick}>Usługi</NavLink>
              <NavLink href="#portfolio" onClick={handleLinkClick}>Portfolio</NavLink>
              <NavLink href="#testimonials" onClick={handleLinkClick}>Opinie</NavLink>
              <NavLink href="#contact" onClick={handleLinkClick}>Kontakt</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
