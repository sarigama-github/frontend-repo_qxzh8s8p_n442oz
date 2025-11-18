import React from 'react'
import { Code2, ShoppingBag, Smartphone, Share2 } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Tworzenie stron internetowych',
    desc: 'Projektujemy szybkie i piękne strony dopasowane do Twojej marki, zorientowane na konwersję.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    desc: 'Budujemy skalowalne sklepy online z płatnościami i integracjami, które sprzedają.',
  },
  {
    icon: Smartphone,
    title: 'Aplikacje mobilne',
    desc: 'Nowoczesne aplikacje na iOS i Android — natywne wrażenia i wysoka wydajność.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Skuteczne strategie i content, który przyciąga uwagę i buduje społeczność.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Poznaj nasze mocne strony
          </h2>
          <p className="mt-4 text-slate-600">Kompleksowe wsparcie od strategii po wdrożenie.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-100">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
