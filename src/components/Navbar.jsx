import { useState, useEffect } from 'react'
import { Menu, Phone, Instagram } from 'lucide-react'

export default function Navbar({ onBook, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const t = (en, es) => (lang === 'es' ? es : en)

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home', label: t('Home', 'Inicio') },
    { id: 'about', label: t('About', 'Nosotros') },
    { id: 'services', label: t('Services', 'Servicios') },
    { id: 'gallery', label: t('Gallery', 'Galería') },
    { id: 'reviews', label: t('Reviews', 'Opiniones') },
    { id: 'contact', label: t('Contact', 'Contacto') },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-neutral-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div onClick={() => scrollTo('home')} className="cursor-pointer select-none">
          <div className="text-[13px] tracking-[0.35em] uppercase text-neutral-300">De Bessa Hair</div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">Puerto Banús • Marbella</div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm text-neutral-300 hover:text-white transition-colors">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-neutral-200 hover:bg-white/5">
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a href="https://wa.me/34622178091?text=Hello%20De%20Bessa%20Hair%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank" className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-black font-medium hover:bg-amber-300 transition-colors">
            <Phone className="w-4 h-4" /> {t('Book Now', 'Reservar')}
          </a>
          <a href="https://instagram.com/debessahair" target="_blank" className="p-2 rounded-full hover:bg-white/5">
            <Instagram className="w-5 h-5 text-neutral-200" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-full hover:bg-white/5">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-900/80">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-neutral-200 text-left py-1">
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-neutral-200">
                {lang === 'en' ? 'ES' : 'EN'}
              </button>
              <a href="https://wa.me/34622178091?text=Hola%20De%20Bessa%20Hair%2C%20quiero%20pedir%20cita." target="_blank" className="px-4 py-2 rounded-full bg-amber-400 text-black font-medium">
                {t('Book Now', 'Reservar')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
