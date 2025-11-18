import React, { useState } from 'react'

const faqs = [
  { q: 'Ile kosztuje realizacja projektu?', a: 'Każdy projekt wyceniamy indywidualnie w zależności od zakresu. Skontaktuj się z nami, a przygotujemy darmową wycenę.' },
  { q: 'Jaki jest czas realizacji?', a: 'Standardowo 2–6 tygodni w zależności od złożoności i dostępności materiałów.' },
  { q: 'Jakich technologii używacie?', a: 'React, Next.js, FastAPI, Tailwind CSS, React Native oraz narzędzia marketingowe dopasowane do potrzeb.' },
  { q: 'Czy zapewniacie wsparcie po wdrożeniu?', a: 'Tak, oferujemy utrzymanie, aktualizacje i wsparcie techniczne.' },
  { q: 'Czy pomagacie w tworzeniu treści?', a: 'Tak, wspieramy w copywritingu, projektach graficznych i materiałach do social media.' },
  { q: 'Czy zajmujecie się SEO?', a: 'Tak, wdrażamy dobre praktyki SEO on-site i oferujemy stałe działania optymalizacyjne.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen((v) => !v)} className="w-full text-left py-4 flex items-center justify-between">
        <span className="font-medium text-slate-900">{q}</span>
        <span className={`text-slate-500 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden pb-4 text-slate-600">{a}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Najczęściej zadawane pytania</h2>
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-200">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
