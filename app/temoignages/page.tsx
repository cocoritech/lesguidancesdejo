"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

// À REMPLACER : reprendre les témoignages publiés sur Instagram.
// Dupliquer un bloc par témoignage et retirer les textes d'exemple.
const temoignages = [
  { icon: "✦", color: "gold", guidance: "Lumière" },
  { icon: "✶", color: "violet-light", guidance: "Passage" },
  { icon: "✩", color: "beige", guidance: "Métamorphose" },
  { icon: "❋", color: "copper", guidance: "Passage" },
];

export default function Temoignages() {
  useScrollReveal();

  return (
    <div className="grain">
      <main className="min-h-screen cosmic-bg relative">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet/25 rounded-full animate-glow" />
          <div className="absolute top-2/3 -right-20 w-48 h-48 bg-gold/10 rounded-full animate-glow delay-200" />
        </div>

        <Nav />

        <div className="h-32" />

        <section className="py-12 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-light/20 to-transparent" />

          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.4em] uppercase mb-4">
                Témoignages
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream">
                Ce qu&apos;elles ont reçu
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {temoignages.map((t, index) => (
                <div
                  key={index}
                  className="scroll-reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`glass rounded-3xl p-8 h-full relative overflow-hidden border border-${t.color}/20`}>
                    <span className={`text-2xl text-${t.color}`} dangerouslySetInnerHTML={{ __html: t.icon }} />
                    <blockquote className="font-[family-name:var(--font-cormorant)] text-xl text-cream italic mt-4 mb-4 leading-relaxed">
                      « Témoignage à intégrer depuis Instagram »
                    </blockquote>
                    <p className="font-[family-name:var(--font-raleway)] text-cream/40 text-xs uppercase tracking-wider">
                      Prénom · Guidance {t.guidance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== INSTAGRAM CTA ====== */}
        <section className="py-16 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-light/10 to-transparent" />

          <div className="max-w-2xl mx-auto text-center scroll-reveal">
            <p className="font-[family-name:var(--font-raleway)] text-cream/40 text-sm mb-6">
              Envie d&apos;en lire plus ? Retrouve les avis et les actualités sur Instagram.
            </p>
            <a
              href="https://www.instagram.com/lesguidancesdejo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 glass px-10 py-5 rounded-full hover:border-violet-light/30 transition-all duration-700 hover:scale-105"
            >
              <svg className="w-5 h-5 text-cream/60 group-hover:text-violet-light transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-[family-name:var(--font-raleway)] text-cream/70 text-sm tracking-wider group-hover:text-cream transition-colors duration-500">
                @lesguidancesdejo
              </span>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
