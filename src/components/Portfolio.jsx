import React from 'react'

const projects = [
  { id: 1, title: 'Sklep Modowy', tech: ['Next.js', 'Stripe'], image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Aplikacja Fitness', tech: ['React Native', 'Firebase'], image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'SaaS Analytics', tech: ['React', 'Tailwind'], image: 'https://images.unsplash.com/photo-1603771929104-df2b577c8724?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTa2xlcCUyME1vZG93eXxlbnwwfDB8fHwxNzYzNDk1NjgyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Landing Fintech', tech: ['Vite', 'Framer Motion'], image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Platforma Edu', tech: ['Python', 'FastAPI'], image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Portal Eventowy', tech: ['React', 'Supabase'], image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Zobacz nasze ostatnie realizacje</h2>
            <p className="mt-3 text-slate-600">Różnorodne projekty dla firm z wielu branż.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-1 text-slate-200 text-sm">{p.tech.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
