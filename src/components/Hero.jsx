import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onBook, lang }) {
  const t = (en, es) => (lang === 'es' ? es : en)

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0E0D0C] via-[#141311] to-[#0E0D0C]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-28 md:py-36">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            {t('Luxury Hair Extensions & Hair Care in Marbella', 'Extensiones de lujo y cuidado capilar en Marbella')}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-neutral-200 text-lg md:text-xl leading-relaxed">
            {t('Premium extensions, volume and hydration treatments in Puerto Banús. Personalised care for an effortlessly chic look.', 'Extensiones premium, volumen e hidratación en Puerto Banús. Cuidado personalizado para un look impecable.')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex items-center gap-4">
            <button onClick={onBook} className="px-6 py-3 rounded-full bg-amber-400 text-black font-medium hover:bg-amber-300 transition-colors">
              {t('Book Your Appointment', 'Reservar Cita')}
            </button>
            <a href="#services" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition">
              {t('Explore Services', 'Ver Servicios')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
