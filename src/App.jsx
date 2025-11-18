import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useRevealOnScroll()

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href')
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
    return () => {
      links.forEach((link) => link.removeEventListener('click', () => {}))
    }
  }, [])

  return (
    <div className="bg-slate-900">
      <Navbar />

      <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
        <Hero />
      </div>

      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <Services />
      </div>

      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <Portfolio />
      </div>

      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <Testimonials />
      </div>

      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <FAQ />
      </div>

      <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <CTA />
      </div>

      <Footer />
    </div>
  )
}
