export function Footer() {
  return (
    <footer className="py-10 bg-brand-green-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-cormorant text-xl text-white/60 italic font-light">
          Betsi Coffee
        </span>

        <p className="font-dm text-white/30 text-xs tracking-[0.1em] text-center">
          260 Bank St, Ottawa ON K2P 1X4 · Ethiopian Specialty Coffee
        </p>

        <p className="font-dm text-white/20 text-xs">
          © {new Date().getFullYear()} Betsi Coffee
        </p>
      </div>
    </footer>
  );
}
