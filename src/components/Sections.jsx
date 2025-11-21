import { motion } from 'framer-motion'
import { Star, MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function Sections({ lang, reviews = [] }) {
  const t = (en, es) => (lang === 'es' ? es : en)

  const services = [
    { title: t('Hair Extensions', 'Extensiones de pelo'), desc: t('Seamless premium extensions for natural length and volume.', 'Extensiones premium para un largo y volumen natural.') },
    { title: t('Volume & Length', 'Volumen y Largo'), desc: t('Tailored treatments for thicker, fuller hair.', 'Tratamientos a medida para un cabello más denso.') },
    { title: t('Hydration & Repair', 'Hidratación y Reparación'), desc: t('Intensive hydration rituals to restore shine and softness.', 'Rituales de hidratación intensiva para brillo y suavidad.') },
    { title: t('Pre-summer hair care', 'Cuidado pre-verano'), desc: t('Protective care to prepare hair for sun and sea.', 'Cuidado protector para preparar el cabello para sol y mar.') },
    { title: t('Personal consultation', 'Consulta personal'), desc: t('One-to-one consultations to design your dream hair.', 'Asesoramiento personalizado para crear tu mejor versión.') },
  ]

  const photos = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508853611902-94d901c936ad?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1530089711124-5d9e1eb5f3f0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div className="bg-neutral-50">
      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{t('About Us', 'Nosotros')}</h2>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              {t('De Bessa Hair is a boutique salon in Puerto Banús specialising in luxury hair extensions and expert hair care. Our philosophy centres on natural beauty, quality and personalised service.','De Bessa Hair es un salón boutique en Puerto Banús especializado en extensiones de lujo y cuidado experto del cabello. Nuestra filosofía se centra en la belleza natural, la calidad y el servicio personalizado.')}
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              {t('We combine advanced techniques with premium products to achieve flawless, natural results that elevate your everyday look.','Combinamos técnicas avanzadas y productos premium para lograr resultados impecables y naturales que realzan tu look diario.')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {photos.map((src, i) => (
              <img key={i} src={src} alt="gallery" className="rounded-2xl object-cover h-40 w-full md:h-56 shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white/60 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{t('Services', 'Servicios')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-medium text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{t('Gallery', 'Galería')}</h2>
          <a href="https://instagram.com/debessahair" target="_blank" className="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
            <Instagram className="w-4 h-4"/> Instagram
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.concat(photos).map((src, i) => (
            <img key={i} src={src} alt="gallery" className="rounded-xl object-cover h-60 w-full shadow" />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white/60 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{t('Reviews', 'Opiniones')}</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200">
                <div className="flex items-center gap-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-neutral-700">“{r.comment}”</p>
                <div className="mt-4 text-sm text-neutral-500">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{t('Contact', 'Contacto')}</h2>
            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-neutral-600"/>Calle Jesús Puente 21a, Puerto Banús, Marbella</div>
              <a href="tel:+34622178091" className="flex items-center gap-3 hover:text-neutral-900"><Phone className="w-5 h-5 text-neutral-600"/>+34 622 178 091</a>
              <a href="https://instagram.com/debessahair" target="_blank" className="flex items-center gap-3 hover:text-neutral-900"><Instagram className="w-5 h-5 text-neutral-600"/>@debessahair</a>
            </div>
            <div className="mt-8 h-64 w-full rounded-2xl overflow-hidden">
              <iframe title="map" src="https://www.google.com/maps?q=Puerto%20Banus%20Marbella&output=embed" className="w-full h-full border-0"></iframe>
            </div>
          </div>

          <ContactForm lang={lang} />
        </div>
      </section>
    </div>
  )
}

function ContactForm({ lang }) {
  const t = (en, es) => (lang === 'es' ? es : en)
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      message: fd.get('message'),
      language: lang,
    }
    try {
      await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      alert(t('Thank you! We will contact you shortly.', '¡Gracias! Te contactaremos pronto.'))
      e.currentTarget.reset()
    } catch (err) {
      alert(t('Something went wrong. Please try again later.', 'Algo salió mal. Por favor, inténtalo más tarde.'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
      <h3 className="text-lg font-medium text-neutral-900">{t('Send us a message', 'Envíanos un mensaje')}</h3>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-neutral-600 mb-1">{t('Name', 'Nombre')}</label>
          <input name="name" required className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-400"/>
        </div>
        <div>
          <label className="block text-sm text-neutral-600 mb-1">Email</label>
          <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-400"/>
        </div>
        <div>
          <label className="block text-sm text-neutral-600 mb-1">{t('Phone', 'Teléfono')}</label>
          <input name="phone" className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-400"/>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-neutral-600 mb-1">{t('Message', 'Mensaje')}</label>
          <textarea name="message" rows={4} required className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-400"/>
        </div>
      </div>
      <button type="submit" className="mt-6 px-5 py-2.5 rounded-full bg-amber-400 text-black font-medium hover:bg-amber-300 transition-colors">{t('Send Message', 'Enviar Mensaje')}</button>
    </form>
  )
}
