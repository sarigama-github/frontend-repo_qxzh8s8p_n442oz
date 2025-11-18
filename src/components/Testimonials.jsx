import React from 'react'

const testimonials = [
  { quote: 'Zespół dostarczył projekt szybciej niż zakładaliśmy i przekroczył nasze oczekiwania jakością wykonania.', name: 'Anna Kowalska', company: 'ModaPro' },
  { quote: 'Profesjonalne podejście, świetna komunikacja i realne efekty w sprzedaży online.', name: 'Piotr Nowak', company: 'FitStore' },
  { quote: 'Aplikacja mobilna działa błyskawicznie. Polecamy współpracę!', name: 'Katarzyna Wiśniewska', company: 'MoveUp' },
  { quote: 'Kampanie social media znacząco zwiększyły nasz zasięg i zaangażowanie.', name: 'Michał Zieliński', company: 'Brandify' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Zobacz co mówią o nas klienci</h2>
          <p className="mt-3 text-slate-600">Rozwój twojego biznesu jest dla nas najważniejszy</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
              <div className="mt-3 flex text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${idx < 5 ? '' : 'opacity-30'}`}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
