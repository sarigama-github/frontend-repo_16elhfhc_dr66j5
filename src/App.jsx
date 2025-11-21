import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('en')
  const [reviews, setReviews] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${backend}/reviews`)
        const data = await res.json()
        setReviews(data)
      } catch (e) {
        setReviews([])
      }
    }
    fetchReviews()
  }, [backend])

  const onBook = () => {
    // WhatsApp fast booking
    window.open('https://wa.me/34622178091?text=Hola%20De%20Bessa%20Hair%2C%20quiero%20pedir%20cita.', '_blank')
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar onBook={onBook} lang={lang} setLang={setLang} />
      <main>
        <Hero onBook={onBook} lang={lang} />
        <Sections lang={lang} reviews={reviews} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App
