import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const scrollToPortfolio = (e) => {
    e.preventDefault()
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-cyan-300/70 mb-4">Agencja Digital • Web • Mobile • Social</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Przekształć swoje pomysły w <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Cyfrowy Sukces</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200/90 max-w-2xl">
            Tworzymy nowoczesne strony internetowe, sklepy e‑commerce, aplikacje mobilne i skuteczne kampanie social media. Projektujemy z myślą o wzroście Twojego biznesu.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#portfolio"
              onClick={scrollToPortfolio}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-500 hover:bg-indigo-500/90 text-white font-semibold px-6 py-3 transition shadow-lg shadow-indigo-500/25"
            >
              Zobacz nasze realizacje
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
