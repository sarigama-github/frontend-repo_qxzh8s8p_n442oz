import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-200/50 bg-white p-8 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Napisz do nas i zapytaj o darmową wycenę</h3>
              <p className="mt-2 text-slate-600">Wykorzystaj szansę zanim zrobią to inni!</p>
            </div>
            <a href="mailto:hello@bluepixel.agency" className="inline-flex items-center justify-center rounded-xl bg-indigo-500 hover:bg-indigo-500/90 text-white font-semibold px-6 py-3 transition shadow-lg shadow-indigo-500/25">Skontaktuj się</a>
          </div>
        </div>
      </div>
    </section>
  )
}
