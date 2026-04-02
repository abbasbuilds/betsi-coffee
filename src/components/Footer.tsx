export function Footer() {
  return (
    <footer className="py-10 bg-brand-espresso border-t border-brand-gold/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-cormorant text-xl text-brand-cream/50 italic font-light">
          Betsi Coffee
        </span>

        <p className="font-dm text-brand-cream/25 text-xs tracking-[0.1em] text-center">
          260 Bank St, Ottawa · Ethiopian Specialty Coffee
        </p>

        <p className="font-dm text-brand-cream/20 text-xs">
          © {new Date().getFullYear()} Betsi Coffee
        </p>
      </div>
    </footer>
  );
}
