import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-violet/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-gold"
          >
            Les Guidances de Jo
          </Link>
          <div className="hidden md:flex gap-8 font-[family-name:var(--font-raleway)] text-sm tracking-wide">
            <a
              href="#about"
              className="text-cream/80 hover:text-gold transition-colors"
            >
              Qui suis-je
            </a>
            <a
              href="#consultations"
              className="text-cream/80 hover:text-gold transition-colors"
            >
              Consultations
            </a>
            <a
              href="#rdv"
              className="text-cream/80 hover:text-gold transition-colors"
            >
              Prendre RDV
            </a>
            <a
              href="https://www.instagram.com/lesguidancesdejo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </div>
          <a
            href="#rdv"
            className="md:hidden bg-violet text-cream px-4 py-2 rounded-full text-sm font-[family-name:var(--font-raleway)]"
          >
            RDV
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-violet/10 to-dark" />

        {/* Decorative stars */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-gold rounded-full animate-shimmer" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-gold/60 rounded-full animate-shimmer delay-200" />
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-violet-light/40 rounded-full animate-shimmer delay-400" />
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-gold/40 rounded-full animate-shimmer delay-600" />
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-beige/30 rounded-full animate-shimmer" />
        <div className="absolute bottom-60 left-16 w-1.5 h-1.5 bg-gold/50 rounded-full animate-shimmer delay-400" />

        {/* Moon decoration */}
        <div className="absolute top-24 right-1/4 w-20 h-20 rounded-full border border-gold/20 animate-float opacity-30" />
        <div className="absolute top-28 right-[calc(25%+4px)] w-16 h-16 rounded-full bg-dark" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-[family-name:var(--font-raleway)] text-violet-light text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Cartomancienne & Guide de transition
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light text-cream mb-6 animate-fade-in-up delay-200">
            Les Guidances{" "}
            <span className="text-gold italic">de Jo</span>
          </h1>
          <p className="font-[family-name:var(--font-raleway)] text-lg md:text-xl text-beige/80 font-light max-w-2xl mx-auto mb-10 animate-fade-in-up delay-400">
            Reprends les rênes de ta vie. Avec clarté, pragmatisme et une
            touche de magie.
          </p>
          <a
            href="#rdv"
            className="inline-block bg-violet hover:bg-violet/80 text-cream font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-sm tracking-wider uppercase transition-all hover:scale-105 animate-fade-in-up delay-600"
          >
            Réserver une consultation
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-copper/5 to-dark" />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: decorative card */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-violet/20 to-copper/20 border border-violet/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4 opacity-60">&#10025;</div>
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl text-gold italic">
                    Johanna
                  </p>
                  <div className="w-16 h-px bg-gold/40 mx-auto my-4" />
                  <p className="font-[family-name:var(--font-raleway)] text-violet-light text-sm tracking-wider">
                    Cartomancienne
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t border-r border-gold/30" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-gold/30" />
            </div>

            {/* Right: text */}
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-8">
                Qui suis-je
              </h2>
              <div className="space-y-5 font-[family-name:var(--font-raleway)] text-cream/70 text-base leading-relaxed">
                <p>
                  Je suis <span className="text-gold font-medium">Johanna</span>,
                  cartomancienne et guide de transition. J&apos;accompagne les
                  femmes qui traversent des moments charnières de leur vie.
                </p>
                <p>
                  Mon approche ? <span className="text-violet-light">Écouter, comprendre et donner du sens</span>{" "}
                  à ce qui se passe dans ton quotidien. Les cartes sont un
                  outil, un miroir qui révèle ce que tu sais déjà au fond de
                  toi.
                </p>
                <p>
                  Je crois que chaque femme a le pouvoir de reprendre les rênes
                  de sa vie. Mon rôle, c&apos;est de t&apos;aider à y voir plus clair
                  — avec <span className="text-beige">pragmatisme et bienveillance</span>,
                  les pieds bien ancrés dans la réalité.
                </p>
                <p className="text-gold/80 italic font-[family-name:var(--font-cormorant)] text-lg">
                  Un cadre bienveillant, du concret, et un espace sûr pour
                  avancer sereinement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultations Section */}
      <section id="consultations" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-violet/5 to-dark" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-4">
            Consultations
          </h2>
          <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 mb-16 max-w-xl mx-auto">
            Un espace d&apos;écoute et de guidance pour t&apos;accompagner dans tes
            transitions
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-dark/50 border border-violet/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500">
              <div className="absolute top-4 right-4 text-gold/30 text-2xl">&#10022;</div>
              <div className="text-4xl mb-4 opacity-70">&#9883;</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-3">
                Guidance par les cartes
              </h3>
              <p className="font-[family-name:var(--font-raleway)] text-cream/60 text-sm leading-relaxed mb-6">
                Un tirage personnalisé pour éclairer ta situation, comprendre
                les énergies en présence et identifier les pistes concrètes
                pour avancer.
              </p>
              <div className="w-12 h-px bg-gold/30 mx-auto" />
            </div>

            {/* Card 2 */}
            <div className="group relative bg-dark/50 border border-violet/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500">
              <div className="absolute top-4 right-4 text-gold/30 text-2xl">&#10022;</div>
              <div className="text-4xl mb-4 opacity-70">&#9672;</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-3">
                Accompagnement transition
              </h3>
              <p className="font-[family-name:var(--font-raleway)] text-cream/60 text-sm leading-relaxed mb-6">
                Un suivi sur mesure pour traverser un moment de changement.
                Ensemble, on pose les choses, on clarifie et on trace ta
                route.
              </p>
              <div className="w-12 h-px bg-gold/30 mx-auto" />
            </div>
          </div>

          <a
            href="#rdv"
            className="inline-block mt-12 bg-gold/10 border border-gold/40 text-gold hover:bg-gold/20 font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-sm tracking-wider uppercase transition-all hover:scale-105"
          >
            Voir les disponibilités
          </a>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="rdv" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-copper/5 to-dark" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-4">
            Prendre rendez-vous
          </h2>
          <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 mb-12">
            Choisis le créneau qui te convient
          </p>

          <div className="rounded-2xl overflow-hidden border border-violet/20 bg-cream/5">
            <iframe
              src="https://calendly.com/lesguidancesdejo?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=291e15&text_color=f5f0eb&primary_color=624285"
              width="100%"
              height="700"
              frameBorder="0"
              title="Calendrier de rendez-vous"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-violet/10" />
        <div className="relative">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl text-cream/60 mb-4">
            Retrouve-moi sur Instagram
          </p>
          <a
            href="https://www.instagram.com/lesguidancesdejo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet/20 to-copper/20 border border-violet/30 text-cream font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-sm tracking-wider hover:border-gold/50 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @lesguidancesdejo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-violet/10 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-gold">
              Les Guidances de Jo
            </p>
            <p className="font-[family-name:var(--font-raleway)] text-cream/40 text-xs mt-1">
              &copy; 2025 Johanna — Tous droits réservés
            </p>
          </div>
          <div className="flex gap-6 font-[family-name:var(--font-raleway)] text-sm">
            <Link href="/cgv" className="text-cream/50 hover:text-gold transition-colors">
              CGV
            </Link>
            <a
              href="https://www.instagram.com/lesguidancesdejo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
