"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="grain">
      {/* ====== INTRO ANIMATION OVERLAY ====== */}
      <div className="intro-overlay fixed inset-0 z-[100] bg-[#0d0a07] flex items-center justify-center pointer-events-none">
        {/* Orbiting stars */}
        <div className="intro-star absolute w-1 h-1 bg-violet-light rounded-full top-1/2 left-1/2" style={{ animationDelay: "0s" }} />
        <div className="intro-star absolute w-1.5 h-1.5 bg-violet rounded-full top-1/3 left-1/3" style={{ animationDelay: "0.2s" }} />
        <div className="intro-star absolute w-1 h-1 bg-gold rounded-full top-2/3 right-1/3" style={{ animationDelay: "0.4s" }} />
        <div className="intro-star absolute w-0.5 h-0.5 bg-violet-light rounded-full top-1/4 right-1/4" style={{ animationDelay: "0.1s" }} />
        <div className="intro-star absolute w-1 h-1 bg-violet/60 rounded-full bottom-1/3 left-1/4" style={{ animationDelay: "0.3s" }} />

        {/* Central symbol */}
        <div className="intro-symbol flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-violet-light/60 flex items-center justify-center animate-pulse-cosmic">
            <span className="text-3xl text-violet-light">&#10022;</span>
          </div>
          <p className="intro-text font-[family-name:var(--font-raleway)] text-cream/80 text-xs uppercase tracking-[0.3em]">
            Les Guidances de Jo
          </p>
        </div>
      </div>

      <main className="min-h-screen cosmic-bg relative">
        {/* ====== FLOATING COSMIC ORBS ====== */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet/25 rounded-full animate-glow" />
          <div className="absolute top-2/3 -right-20 w-48 h-48 bg-violet-light/10 rounded-full animate-glow delay-200" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gold/10 rounded-full animate-glow delay-400" />
        </div>

        <Nav />

        {/* ====== HERO ====== */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Star field */}
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "15%", left: "10%", animationDelay: "0s", animationDuration: "3s", opacity: 0.5 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "25%", left: "85%", animationDelay: "1s", animationDuration: "4s", opacity: 0.3 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "40%", left: "20%", animationDelay: "2s", animationDuration: "3.5s", opacity: 0.6 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "55%", left: "75%", animationDelay: "0.5s", animationDuration: "4.5s", opacity: 0.4 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "70%", left: "30%", animationDelay: "1.5s", animationDuration: "3s", opacity: 0.5 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "20%", left: "60%", animationDelay: "2.5s", animationDuration: "4s", opacity: 0.3 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "80%", left: "90%", animationDelay: "0.8s", animationDuration: "3.5s", opacity: 0.6 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "35%", left: "45%", animationDelay: "1.8s", animationDuration: "4.5s", opacity: 0.4 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "60%", left: "5%", animationDelay: "3s", animationDuration: "3s", opacity: 0.5 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "10%", left: "40%", animationDelay: "0.3s", animationDuration: "4s", opacity: 0.3 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "45%", left: "95%", animationDelay: "2.2s", animationDuration: "3.5s", opacity: 0.6 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "75%", left: "55%", animationDelay: "1.2s", animationDuration: "4.5s", opacity: 0.4 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "5%", left: "70%", animationDelay: "3.5s", animationDuration: "3s", opacity: 0.5 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "90%", left: "15%", animationDelay: "0.7s", animationDuration: "4s", opacity: 0.3 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "30%", left: "25%", animationDelay: "2.8s", animationDuration: "3.5s", opacity: 0.6 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "65%", left: "80%", animationDelay: "1.6s", animationDuration: "4.5s", opacity: 0.4 }} />
          <div className="star animate-shimmer" style={{ width: "2px", height: "2px", top: "50%", left: "35%", animationDelay: "4s", animationDuration: "3s", opacity: 0.5 }} />
          <div className="star animate-shimmer" style={{ width: "1px", height: "1px", top: "85%", left: "65%", animationDelay: "0.4s", animationDuration: "4s", opacity: 0.3 }} />

          {/* Orbital ring */}
          <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-violet/10 rounded-full animate-float" style={{ animationDuration: "12s" }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-violet-light/60 rounded-full -translate-x-1/2 -translate-y-1/2 animate-shimmer" />
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-gold/40 rounded-full -translate-x-1/2 translate-y-1/2 animate-shimmer delay-300" />
          </div>

          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-violet-light/5 rounded-full" style={{ animation: "float 15s ease-in-out infinite reverse" }} />

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="animate-reveal delay-200 font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-[6rem] font-light text-cream leading-[1] mb-8">
              Les Guidances
              <br />
              <span className="gradient-text italic text-6xl md:text-8xl lg:text-[7rem]">
                de Jo
              </span>
            </h1>

            <p className="animate-reveal delay-400 font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-violet-light/90 font-light max-w-lg mx-auto mb-12 leading-relaxed tracking-wide italic">
              Johanna Richard
            </p>

            <div className="animate-reveal delay-600">
              <a
                href="/guidances"
                className="group relative inline-flex items-center gap-3 bg-violet/20 hover:bg-violet/30 border border-violet/40 hover:border-violet-light/50 text-cream font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-700 hover:scale-105"
              >
                <span className="w-2 h-2 bg-violet-light rounded-full group-hover:animate-pulse" />
                Découvrir mes guidances
              </a>
            </div>
          </div>

          {/* Scroll line */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="font-[family-name:var(--font-raleway)] text-[9px] text-cream/30 uppercase tracking-[0.3em] rotate-90 origin-center translate-y-6">
              scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-light/30 to-transparent animate-float" />
          </div>
        </section>

        {/* ====== ABOUT / QUI SUIS-JE ====== */}
        <section id="about" className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
              {/* Left: photo */}
              <div className="lg:col-span-2 scroll-reveal">
                <div className="relative aspect-square max-w-sm mx-auto">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/25 to-violet-light/10 rounded-full blur-3xl" />

                  {/* Card with photo */}
                  <div className="relative glass rounded-3xl aspect-square flex flex-col items-center justify-center overflow-hidden">
                    {/* Photo de Johanna — placer johanna.jpg dans /public/ */}
                    <Image
                      src="/johanna.jpg"
                      alt="Johanna Richard"
                      fill
                      className="object-cover rounded-3xl"
                      onError={(e) => {
                        // Fallback si la photo n'est pas encore uploadée
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector(".photo-fallback") as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }
                      }}
                    />
                    {/* Fallback affiché si pas de photo */}
                    <div className="photo-fallback hidden flex-col items-center justify-center p-10 w-full h-full">
                      <div className="w-16 h-16 rounded-full border border-violet-light/30 flex items-center justify-center mb-6 animate-pulse-cosmic">
                        <span className="text-2xl text-violet-light">&#10025;</span>
                      </div>
                      <p className="font-[family-name:var(--font-cormorant)] text-3xl text-cream italic mb-2">
                        Johanna Richard
                      </p>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-violet-light/50 to-transparent my-3" />
                      <p className="font-[family-name:var(--font-raleway)] text-gold/70 text-[10px] tracking-[0.3em] uppercase">
                        Tarot & Oracles
                      </p>
                    </div>
                    {/* Overlay dégradé bas pour lisibilité */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0a07]/70 to-transparent rounded-b-3xl" />
                    <div className="absolute bottom-5 left-0 right-0 text-center">
                      <p className="font-[family-name:var(--font-cormorant)] text-xl text-cream italic">Johanna Richard</p>
                    </div>
                  </div>

                  {/* Decorative orbiting dot */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="animate-orbit">
                      <div className="w-2 h-2 bg-violet-light/50 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div className="lg:col-span-3">
                <div className="scroll-reveal">
                  <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.4em] uppercase mb-4">
                    Qui suis-je
                  </p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-8 leading-tight">
                    Je suis Johanna,<br />
                    <span className="text-violet-light">guide de transition</span><br />
                    <span className="text-cream/70 text-3xl md:text-4xl">pour les femmes en métamorphose.</span>
                  </h2>
                </div>

                <div className="space-y-5 font-[family-name:var(--font-raleway)] text-cream/70 text-sm leading-[1.9]">
                  <p className="scroll-reveal">
                    Je ne lis pas les cartes classiquement. Je canalise les messages dont ton âme a besoin, sans que tu aies à poser de questions.
                  </p>
                  <p className="scroll-reveal">
                    Ta photo suffit. Je me connecte à ton énergie, les cartes me parlent, et je te transmets ce que tu dois entendre. <span className="text-violet-light italic">Passé, présent ou avenir, ce sont elles qui décident.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Mon chemin jusqu'ici */}
            <div className="grid lg:grid-cols-5 gap-12 mb-16">
              <div className="lg:col-span-2 scroll-reveal">
                <p className="font-[family-name:var(--font-raleway)] text-gold/70 text-[10px] tracking-[0.4em] uppercase mb-4">
                  Mon histoire
                </p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-cream font-light">
                  Mon chemin jusqu&apos;ici
                </h3>
              </div>
              <div className="lg:col-span-3 space-y-5 font-[family-name:var(--font-raleway)] text-cream/70 text-sm leading-[1.9]">
                <p className="scroll-reveal">
                  J&apos;ai moi-même traversé mes propres métamorphoses. Des ruptures qui ont tout remis en question. Des deuils qui ont demandé du temps pour être traversés. Et, à chaque fois, une renaissance qui n&apos;est venue qu&apos;après avoir accepté de me perdre un peu.
                </p>
                <p className="scroll-reveal">
                  Je les ai traversées seule, la plupart du temps. Et c&apos;est parce que j&apos;ai réussi à m&apos;en relever que je mets aujourd&apos;hui tout mon cœur à accompagner les femmes qui vivent, elles aussi, ces mêmes passages.
                </p>
              </div>
            </div>

            {/* Ma promesse */}
            <div className="scroll-reveal glass rounded-3xl p-10 md:p-12 max-w-3xl mx-auto text-center relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-violet/15 rounded-full blur-3xl" />
              <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.4em] uppercase mb-4 relative">
                Ma promesse
              </p>
              <p className="relative font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream font-light italic leading-relaxed">
                Une guidance juste, canalisée spécifiquement pour toi. Un message reçu et transmis sans jugement, quoi que tu traverses.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
