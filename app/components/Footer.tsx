import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-caveat)] text-xl text-violet-light/70">
            Les Guidances de Jo
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-cream/20 text-[10px] mt-1 tracking-wider">
            &copy; 2026 Johanna Richard — Tous droits réservés
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-[family-name:var(--font-raleway)] text-[10px] tracking-[0.15em] uppercase">
          <a
            href="mailto:contact@lesguidancesdejo.fr"
            className="text-cream/30 hover:text-violet-light transition-colors duration-500 normal-case"
          >
            contact@lesguidancesdejo.fr
          </a>
          <Link href="/temoignages" className="text-cream/30 hover:text-violet-light transition-colors duration-500">
            Témoignages
          </Link>
          <Link href="/deontologie" className="text-cream/30 hover:text-violet-light transition-colors duration-500">
            Déontologie
          </Link>
          <Link href="/cgv" className="text-cream/30 hover:text-violet-light transition-colors duration-500">
            CGV
          </Link>
          <a
            href="https://www.instagram.com/lesguidancesdejo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-violet-light transition-colors duration-500"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
