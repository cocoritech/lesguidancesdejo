"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain">
      {/* ====== INTRO ANIMATION OVERLAY ====== */}
      <div className="intro-overlay fixed inset-0 z-[100] bg-[#0d0a07] flex items-center justify-center pointer-events-none">
        {/* Orbiting stars */}
        <div className="intro-star absolute w-1 h-1 bg-gold rounded-full top-1/2 left-1/2" style={{ animationDelay: "0s" }} />
        <div className="intro-star absolute w-1.5 h-1.5 bg-violet-light rounded-full top-1/3 left-1/3" style={{ animationDelay: "0.2s" }} />
        <div className="intro-star absolute w-1 h-1 bg-beige rounded-full top-2/3 right-1/3" style={{ animationDelay: "0.4s" }} />
        <div className="intro-star absolute w-0.5 h-0.5 bg-gold rounded-full top-1/4 right-1/4" style={{ animationDelay: "0.1s" }} />
        <div className="intro-star absolute w-1 h-1 bg-violet-light/60 rounded-full bottom-1/3 left-1/4" style={{ animationDelay: "0.3s" }} />

        {/* Central symbol */}
        <div className="intro-symbol flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-gold/60 flex items-center justify-center animate-pulse-cosmic">
            <span className="text-3xl text-gold">&#10022;</span>
          </div>
          <p className="intro-text font-[family-name:var(--font-raleway)] text-cream/80 text-xs uppercase tracking-[0.3em]">
            Les Guidances de Jo
          </p>
        </div>
      </div>

      <main className="min-h-screen cosmic-bg relative">
        {/* ====== FLOATING COSMIC ORBS ====== */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet/20 rounded-full animate-glow" />
          <div className="absolute top-2/3 -right-20 w-48 h-48 bg-gold/10 rounded-full animate-glow delay-200" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-copper/10 rounded-full animate-glow delay-400" />
        </div>

        {/* ====== NAVIGATION ====== */}
        <nav className="fixed top-0 w-full z-50 glass">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link
              href="/"
              className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-gold"
            >
              Les Guidances de Jo
            </Link>
            <div className="hidden md:flex gap-8 font-[family-name:var(--font-raleway)] text-xs tracking-[0.15em] uppercase">
              <a href="#about" className="text-cream/60 hover:text-gold transition-all duration-500">
                À propos
              </a>
              <a href="#consultations" className="text-cream/60 hover:text-gold transition-all duration-500">
                Consultations
              </a>
              <a href="#rdv" className="text-cream/60 hover:text-gold transition-all duration-500">
                Rendez-vous
              </a>
              <a
                href="https://www.instagram.com/lesguidancesdejo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold transition-all duration-500"
              >
                Instagram
              </a>
            </div>
            <a
              href="#rdv"
              className="md:hidden glass text-gold px-4 py-2 rounded-full text-xs font-[family-name:var(--font-raleway)] uppercase tracking-wider"
            >
              RDV
            </a>
          </div>
        </nav>

        {/* ====== HERO ====== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Star field */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="star animate-shimmer"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.7 + 0.1,
              }}
            />
          ))}

          {/* Orbital ring */}
          <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-violet/10 rounded-full animate-float" style={{ animationDuration: "12s" }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold/60 rounded-full -translate-x-1/2 -translate-y-1/2 animate-shimmer" />
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-violet-light/40 rounded-full -translate-x-1/2 translate-y-1/2 animate-shimmer delay-300" />
          </div>

          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-gold/5 rounded-full" style={{ animation: "float 15s ease-in-out infinite reverse" }} />

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <div className="animate-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-violet-light/80 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8">
                Cartomancienne & Guide de transition
              </p>
            </div>

            <h1 className="animate-reveal delay-200 font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-[6rem] font-light text-cream leading-[0.9] mb-8">
              Les Guidances
              <br />
              <span className="gradient-text italic text-6xl md:text-8xl lg:text-[7rem]">
                de Jo
              </span>
            </h1>

            <p className="animate-reveal delay-400 font-[family-name:var(--font-raleway)] text-base md:text-lg text-cream/50 font-light max-w-lg mx-auto mb-12 leading-relaxed">
              Retrouver de la clarté quand tout s&apos;emmêle.<br className="hidden md:block" />
              Guidance intuitive, concrète et éclairante.
            </p>

            <div className="animate-reveal delay-600">
              <a
                href="#rdv"
                className="group relative inline-flex items-center gap-3 bg-violet/20 hover:bg-violet/30 border border-violet/40 hover:border-gold/50 text-cream font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-700 hover:scale-105"
              >
                <span className="w-2 h-2 bg-gold rounded-full group-hover:animate-pulse" />
                Réserver une consultation
              </a>
            </div>
          </div>

          {/* Scroll line */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="font-[family-name:var(--font-raleway)] text-[9px] text-cream/30 uppercase tracking-[0.3em] rotate-90 origin-center translate-y-6">
              scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/30 to-transparent animate-float" />
          </div>
        </section>

        {/* ====== ABOUT ====== */}
        <section id="about" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              {/* Left: visual element */}
              <div className="lg:col-span-2 scroll-reveal">
                <div className="relative aspect-square max-w-sm mx-auto">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-gold/10 rounded-full blur-3xl" />

                  {/* Card */}
                  <div className="relative glass rounded-3xl aspect-square flex flex-col items-center justify-center p-10">
                    <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 animate-pulse-cosmic">
                      <span className="text-2xl text-gold">&#10025;</span>
                    </div>
                    <p className="font-[family-name:var(--font-cormorant)] text-3xl text-cream italic mb-2">
                      Johanna
                    </p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent my-3" />
                    <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.3em] uppercase">
                      Guide de transition
                    </p>
                  </div>

                  {/* Decorative orbiting dot */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="animate-orbit">
                      <div className="w-2 h-2 bg-gold/50 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div className="lg:col-span-3">
                <div className="scroll-reveal">
                  <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                    Qui suis-je
                  </p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-10 leading-tight">
                    Mettre en lumière. Comprendre.<br />
                    <span className="text-violet-light">Avancer.</span>
                  </h2>
                </div>

                <div className="space-y-6 font-[family-name:var(--font-raleway)] text-cream/60 text-sm leading-[1.8]">
                  <p className="scroll-reveal">
                    Je suis <span className="text-gold">Johanna</span>,
                    cartomancienne et guide de transition.
                    <br />
                    J&apos;accompagne les femmes dans ces moments où tout bouge,
                    où l&apos;on sent qu&apos;un choix, un cap, s&apos;impose.
                  </p>
                  <p className="scroll-reveal">
                    Les cartes sont un support, un miroir. Elles éclairent ce
                    qui est déjà là.
                    <br />
                    Mon rôle est de t&apos;aider à mettre des mots, à retrouver
                    de la clarté, avec <span className="text-beige">pragmatisme
                    et bienveillance</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CONSULTATIONS ====== */}
        <section id="consultations" className="py-32 px-6 relative">
          {/* Background orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/5 rounded-full blur-[100px]" />

          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-20 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                Mes services
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream">
                Consultations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Card 1 */}
              <div className="scroll-reveal group">
                <div className="glass rounded-3xl p-10 h-full hover:border-gold/20 transition-all duration-700 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-violet/10 border border-violet/20 flex items-center justify-center mb-6">
                      <span className="text-xl text-violet-light">&#9883;</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-4">
                      Guidance par les cartes
                    </h3>
                    <p className="font-[family-name:var(--font-raleway)] text-cream/50 text-sm leading-relaxed">
                      Un tirage personnalisé pour éclairer ta situation,
                      comprendre les énergies en présence et identifier les
                      pistes concrètes pour avancer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="scroll-reveal" style={{ transitionDelay: "0.15s" }}>
                <div className="group glass rounded-3xl p-10 h-full hover:border-gold/20 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                      <span className="text-xl text-gold">&#9672;</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-4">
                      Accompagnement transition
                    </h3>
                    <p className="font-[family-name:var(--font-raleway)] text-cream/50 text-sm leading-relaxed">
                      Un suivi sur mesure pour traverser un moment de
                      changement. Ensemble, on clarifie et on trace ta route.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-14 scroll-reveal">
              <a
                href="#rdv"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-raleway)] text-gold/70 text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors duration-500"
              >
                <span className="w-6 h-px bg-gold/40" />
                Voir les disponibilités
                <span className="w-6 h-px bg-gold/40" />
              </a>
            </div>
          </div>
        </section>

        {/* ====== DEROULEMENT ====== */}
        <section className="py-32 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                En pratique
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream">
                Comment se déroule une guidance ?
              </h2>
            </div>

            <div className="glass rounded-3xl p-10 md:p-14 scroll-reveal">
              <div className="space-y-8 font-[family-name:var(--font-raleway)] text-cream/60 text-sm leading-[1.9]">
                <p>
                  La guidance personnelle se fait via <span className="text-cream/80">messages vocaux WhatsApp</span> uniquement.
                </p>

                <div className="pl-5 border-l border-gold/20">
                  <p>
                    L&apos;avantage de ce fonctionnement, c&apos;est que vous n&apos;avez pas besoin d&apos;être disponible au moment du rendez-vous.
                    Je me charge de vous envoyer chaque tirage de cartes en photo, suivi de son interprétation par message vocal.
                    Cela vous permet de <span className="text-beige">conserver votre guidance</span>, et de la réécouter autant de fois que vous le souhaitez.
                  </p>
                </div>

                <div>
                  <p className="text-gold/80 text-xs tracking-[0.15em] uppercase mb-3">Après votre réservation</p>
                  <p>
                    Un email de rappel vous sera envoyé 24h avant le rendez-vous. Il vous sera alors demandé de transmettre par WhatsApp :
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex gap-3">
                      <span className="text-gold/40 mt-0.5">—</span>
                      <span>Date de naissance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold/40 mt-0.5">—</span>
                      <span>Photo récente de la consultante (vous-même)</span>
                    </li>
                  </ul>
                </div>

                <div className="pl-5 border-l border-violet/20">
                  <p className="italic text-cream/50">
                    En prenant rendez-vous avec moi, vous acceptez de lâcher-prise et de faire confiance aux cartes.
                    Ce sont elles qui vont se charger de mettre en lumière ce qui doit l&apos;être, et d&apos;aborder les thématiques essentielles.
                  </p>
                </div>

                <p className="text-violet-light font-[family-name:var(--font-cormorant)] text-lg italic">
                  Bienveillance, empathie et tolérance sont mes mots d&apos;ordre.
                </p>

                <div className="pt-4 border-t border-cream/5">
                  <p className="text-cream/40 text-xs">
                    En cas d&apos;annulation, merci de prévenir au minimum 48h à l&apos;avance.
                    Aucun remboursement ne pourra être effectué au-delà de ce délai.
                  </p>
                </div>

                <p className="text-right text-gold/60 font-[family-name:var(--font-cormorant)] text-base italic">
                  Avec toute ma lumière, Johanna
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CALENDLY ====== */}
        <section id="rdv" className="py-32 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                Prendre rendez-vous
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream">
                Choisis ton créneau
              </h2>
            </div>

            <div className="scroll-reveal glass rounded-3xl overflow-hidden">
              <iframe
                src="https://calendly.com/lesguidancesdejo?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0d0a07&text_color=f5f0eb&primary_color=624285"
                width="100%"
                height="700"
                frameBorder="0"
                title="Calendrier de rendez-vous"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* ====== INSTAGRAM CTA ====== */}
        <section className="py-24 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

          <div className="max-w-2xl mx-auto text-center scroll-reveal">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-cream/40 mb-8 italic">
              Retrouve-moi au quotidien
            </p>
            <a
              href="https://www.instagram.com/lesguidancesdejo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 glass px-10 py-5 rounded-full hover:border-gold/30 transition-all duration-700 hover:scale-105"
            >
              <svg className="w-5 h-5 text-cream/60 group-hover:text-gold transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-[family-name:var(--font-raleway)] text-cream/70 text-sm tracking-wider group-hover:text-cream transition-colors duration-500">
                @lesguidancesdejo
              </span>
            </a>
          </div>
        </section>

        {/* ====== FOOTER ====== */}
        <footer className="py-12 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-gold/70">
                Les Guidances de Jo
              </p>
              <p className="font-[family-name:var(--font-raleway)] text-cream/20 text-[10px] mt-1 tracking-wider">
                &copy; 2025 Johanna — Tous droits réservés
              </p>
            </div>
            <div className="flex gap-8 font-[family-name:var(--font-raleway)] text-[10px] tracking-[0.15em] uppercase">
              <Link href="/cgv" className="text-cream/30 hover:text-gold transition-colors duration-500">
                CGV
              </Link>
              <a
                href="https://www.instagram.com/lesguidancesdejo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-colors duration-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
