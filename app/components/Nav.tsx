"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/guidances", label: "Mes Guidances" },
  { href: "/processus", label: "Le processus" },
  { href: "/temoignages", label: "Témoignages" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-caveat)] text-2xl font-semibold text-violet-light"
        >
          Les Guidances de Jo
        </Link>
        <div className="hidden md:flex gap-8 font-[family-name:var(--font-raleway)] text-xs tracking-[0.15em] uppercase">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-500 ${
                pathname === link.href
                  ? "text-violet-light"
                  : "text-cream/60 hover:text-violet-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="/guidances#rdv"
          className="hidden md:inline-block glass text-violet-light border border-violet-light/30 hover:border-violet-light/60 px-5 py-2 rounded-full text-xs font-[family-name:var(--font-raleway)] uppercase tracking-wider transition-all duration-500"
        >
          Réserver
        </a>
        <a
          href="/guidances#rdv"
          className="md:hidden glass text-violet-light px-4 py-2 rounded-full text-xs font-[family-name:var(--font-raleway)] uppercase tracking-wider"
        >
          RDV
        </a>
      </div>
    </nav>
  );
}
