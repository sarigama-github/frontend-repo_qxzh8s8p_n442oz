import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
              <span className="text-white font-semibold">BluePixel</span>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-md">Tworzymy nowoczesne rozwiązania cyfrowe, które pomagają firmom rosnąć szybciej. Projektujemy z myślą o użytkowniku i rezultatach.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>hello@bluepixel.agency</li>
              <li>+48 600 000 000</li>
              <li>Warszawa, Polska</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Social</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} BluePixel. Wszelkie prawa zastrzeżone.</p>
          <a href="#" className="hover:text-slate-300">Polityka prywatności</a>
        </div>
      </div>
    </footer>
  )
}
