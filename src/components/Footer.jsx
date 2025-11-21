export default function Footer({ lang }) {
  const t = (en, es) => (lang === 'es' ? es : en)
  return (
    <footer className="bg-black text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-[13px] tracking-[0.35em] uppercase text-neutral-300">De Bessa Hair</div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">Puerto Banús • Marbella</div>
        </div>
        <div className="text-sm">{t('Luxury hair extensions & care in Marbella', 'Extensiones y cuidado capilar de lujo en Marbella')}</div>
        <div className="text-sm">© {new Date().getFullYear()} De Bessa Hair</div>
      </div>
    </footer>
  )}
