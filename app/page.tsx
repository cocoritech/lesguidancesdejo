"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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

  const guidances = [
    {
      name: "Lumière",
      price: 45,
      tagline: "Pour recevoir le message essentiel",
      icon: "&#10022;",
      color: "gold",
      includes: [
        "1 tirage oracles",
        "1 Arcane Majeur du Tarot",
        "Photos + interprétation vocale",
      ],
      forYouIf: [
        "Tu sens qu'un message veut venir à toi",
        "Tu veux savoir où tu en es dans ton chemin",
        "Tu découvres mon accompagnement",
      ],
    },
    {
      name: "Passage",
      price: 75,
      tagline: "Pour trouver la clarté dans ta transition",
      icon: "&#10025;",
      color: "violet-light",
      includes: [
        "1 tirage oracles",
        "1 tirage Tarot",
        "1 tirage conseils",
        "Photos + interprétations vocales",
      ],
      forYouIf: [
        "Tu es en pleine transition",
        "Tu sens qu'un changement s'opère en toi",
        "Tu veux comprendre ce qui se joue en profondeur",
      ],
    },
    {
      name: "Métamorphose",
      price: 120,
      tagline: "Pour un accompagnement complet",
      icon: "&#10038;",
      color: "beige",
      includes: [
        "1 tirage oracles",
        "1 tirage Météo Énergétique",
        "1 tirage Tarot",
        "1 tirage de clarification",
        "1 tirage conseils",
        "Photos + interprétations vocales",
      ],
      forYouIf: [
        "Tu traverses une transformation majeure",
        "Tu cherches toutes les clés pour avancer",
        "Tu veux recevoir TOUT ce que tu dois entendre",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tu réserves ta guidance",
      color: "gold",
      icon: "✦",
      details: [
        "Sur Calendly (bouton ci-dessous)",
        "Tu choisis : Lumière, Passage ou Métamorphose",
        "Tu paies en ligne",
        "Tu reçois un email de confirmation",
      ],
    },
    {
      number: "02",
      title: "Tu m'envoies ta photo",
      color: "violet-light",
      icon: "✶",
      details: [
        "24h avant ton RDV",
        "Une photo récente de toi",
        "Ta date de naissance",
        "Par WhatsApp",
      ],
    },
    {
      number: "03",
      title: "Je canalise pour toi",
      color: "beige",
      icon: "✩",
      details: [
        "Je me connecte à ton énergie",
        "Les cartes me parlent",
        "Je reçois les messages dont ton âme a besoin",
      ],
      note: "Passé, présent ou avenir... Les cartes décident.",
    },
    {
      number: "04",
      title: "Tu reçois ta guidance",
      color: "copper",
      icon: "❋",
      details: [
        "Par WhatsApp uniquement",
        "Photo de chaque tirage",
        "Mon interprétation en vocal",
      ],
      note: "À conserver et réécouter autant de fois que tu veux.",
    },
  ];

  const stepColors: Record<string, { border: string; number: string; icon: string; glow: string; bullet: string }> = {
    gold: {
      border: "border-gold/40 hover:border-gold/70",
      number: "text-gold",
      icon: "text-gold bg-gold/10 border-gold/30",
      glow: "bg-gold/15",
      bullet: "text-gold",
    },
    "violet-light": {
      border: "border-violet-light/40 hover:border-violet-light/70",
      number: "text-violet-light",
      icon: "text-violet-light bg-violet-light/10 border-violet-light/30",
      glow: "bg-violet-light/15",
      bullet: "text-violet-light",
    },
    beige: {
      border: "border-beige/40 hover:border-beige/70",
      number: "text-beige",
      icon: "text-beige bg-beige/10 border-beige/30",
      glow: "bg-beige/15",
      bullet: "text-beige",
    },
    copper: {
      border: "border-copper/40 hover:border-copper/70",
      number: "text-copper",
      icon: "text-copper bg-copper/10 border-copper/30",
      glow: "bg-copper/15",
      bullet: "text-copper",
    },
  };

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
              <a href="#guidances" className="text-cream/60 hover:text-gold transition-all duration-500">
                Mes Guidances
              </a>
              <a href="#comment-ca-marche" className="text-cream/60 hover:text-gold transition-all duration-500">
                Comment ça marche
              </a>
              <a href="#rdv" className="text-cream/60 hover:text-gold transition-all duration-500">
                Réserver
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
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold/60 rounded-full -translate-x-1/2 -translate-y-1/2 animate-shimmer" />
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-violet-light/40 rounded-full -translate-x-1/2 translate-y-1/2 animate-shimmer delay-300" />
          </div>

          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-gold/5 rounded-full" style={{ animation: "float 15s ease-in-out infinite reverse" }} />

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="animate-reveal delay-200 font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-[6rem] font-light text-cream leading-[1] mb-8">
              Les Guidances
              <br />
              <span className="gradient-text italic text-6xl md:text-8xl lg:text-[7rem] inline-block pb-3">
                de Jo
              </span>
            </h1>

            <p className="animate-reveal delay-400 font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-gold/80 font-light max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">
              Johanna R&nbsp;&nbsp;|&nbsp;&nbsp;Guide de transition
            </p>

            <div className="animate-reveal delay-600">
              <a
                href="#guidances"
                className="group relative inline-flex items-center gap-3 bg-violet/20 hover:bg-violet/30 border border-violet/40 hover:border-gold/50 text-cream font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-700 hover:scale-105"
              >
                <span className="w-2 h-2 bg-gold rounded-full group-hover:animate-pulse" />
                Découvrir mes guidances
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
        <section id="about" className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left: photo */}
              <div className="lg:col-span-2 scroll-reveal">
                <div className="relative aspect-square max-w-sm mx-auto">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-gold/10 rounded-full blur-3xl" />

                  {/* Card with photo */}
                  <div className="relative glass rounded-3xl aspect-square flex flex-col items-center justify-center overflow-hidden">
                    {/* Photo de Johanna — placer johanna.jpg dans /public/ */}
                    <Image
                      src="/johanna.jpg"
                      alt="Johanna — Guide de transition"
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
                      <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 animate-pulse-cosmic">
                        <span className="text-2xl text-gold">&#10025;</span>
                      </div>
                      <p className="font-[family-name:var(--font-cormorant)] text-3xl text-cream italic mb-2">
                        Johanna
                      </p>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent my-3" />
                      <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.3em] uppercase">
                        Tarot & Oracles
                      </p>
                    </div>
                    {/* Overlay dégradé bas pour lisibilité */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0a07]/70 to-transparent rounded-b-3xl" />
                    <div className="absolute bottom-5 left-0 right-0 text-center">
                      <p className="font-[family-name:var(--font-cormorant)] text-xl text-cream italic">Johanna</p>
                      <p className="font-[family-name:var(--font-raleway)] text-violet-light/80 text-[9px] tracking-[0.25em] uppercase mt-1">Guide de transition</p>
                    </div>
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
                  <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-8 leading-tight">
                    Je suis Johanna,<br />
                    <span className="text-violet-light">guide de transition.</span>
                  </h2>
                </div>

                <div className="space-y-5 font-[family-name:var(--font-raleway)] text-cream/70 text-sm leading-[1.9]">
                  <p className="scroll-reveal">
                    Je suis Johanna, guide de transition pour les <span className="text-beige">femmes en métamorphose</span>.
                  </p>
                  <p className="scroll-reveal">
                    Je ne lis pas les cartes classiquement. Je canalise les messages dont ton âme a besoin — sans que tu aies à poser de questions.
                  </p>
                  <p className="scroll-reveal">
                    Ta photo suffit. Je me connecte à ton énergie, les cartes me parlent, et je te transmets ce que tu dois entendre. <span className="text-gold/80 italic">Passé, présent ou avenir, ce sont elles qui décident.</span>
                  </p>
                  <p className="scroll-reveal">
                    Mon format est unique : tout se passe par <span className="text-beige">WhatsApp</span>. Tu reçois les photos de chaque tirage et mes interprétations en vocal. Tu peux conserver ta guidance et la réécouter autant de fois que nécessaire, à ton rythme.
                  </p>
                  <p className="scroll-reveal font-medium text-cream/80">
                    Ce que je t&apos;apporte ? De la clarté quand tout est flou. Une validation de ce que tu ressens. Une guidance sans jugement pour traverser tes <span className="text-violet-light">ruptures, tes deuils, tes renaissances</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== MES GUIDANCES ====== */}
        <section id="guidances" className="py-20 px-6 relative">
          {/* Background orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[120px]" />

          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                Mes Guidances
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-4">
                Choisis celle qui résonne avec toi
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {guidances.map((guidance, index) => (
                <div
                  key={guidance.name}
                  className="scroll-reveal group"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`glass rounded-3xl p-8 h-full hover:border-${guidance.color}/30 transition-all duration-700 relative overflow-hidden flex flex-col`}>
                    {/* Hover glow */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${guidance.color}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    <div className="relative flex-1">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-full bg-${guidance.color}/10 border border-${guidance.color}/20 flex items-center justify-center mb-6`}>
                        <span
                          className={`text-2xl text-${guidance.color}`}
                          dangerouslySetInnerHTML={{ __html: guidance.icon }}
                        />
                      </div>

                      {/* Name & Price */}
                      <div className="mb-4">
                        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-1">
                          Guidance {guidance.name}
                        </h3>
                        <p className={`font-[family-name:var(--font-cormorant)] text-3xl text-${guidance.color} font-light`}>
                          {guidance.price}€
                        </p>
                      </div>

                      {/* Tagline */}
                      <p className="font-[family-name:var(--font-raleway)] text-cream/60 text-sm mb-6 italic">
                        {guidance.tagline}
                      </p>

                      {/* Includes */}
                      <div className="mb-6">
                        <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] uppercase tracking-wider mb-3">
                          Inclus
                        </p>
                        <ul className="space-y-2">
                          {guidance.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-raleway)] text-cream/50 text-sm">
                              <span className="text-gold/40 mt-0.5">✦</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* For you if */}
                      <div className="pt-4 border-t border-cream/5">
                        <p className="font-[family-name:var(--font-raleway)] text-violet-light/60 text-[10px] uppercase tracking-wider mb-3">
                          Pour toi si...
                        </p>
                        <ul className="space-y-2">
                          {guidance.forYouIf.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-raleway)] text-cream/40 text-xs">
                              <span className="text-violet-light/40 mt-0.5">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#rdv"
                      className={`mt-8 block text-center py-3 rounded-full border border-${guidance.color}/30 hover:border-${guidance.color}/60 hover:bg-${guidance.color}/10 font-[family-name:var(--font-raleway)] text-cream/70 text-xs uppercase tracking-wider transition-all duration-500`}
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== COMMENT CA MARCHE ====== */}
        <section id="comment-ca-marche" className="py-20 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                Le processus
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream">
                Comment ça marche
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => {
                const c = stepColors[step.color];
                return (
                  <div
                    key={step.number}
                    className="scroll-reveal"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={`glass rounded-3xl p-8 h-full relative overflow-hidden group transition-all duration-700 border ${c.border}`}>
                      {/* Colored glow top-right */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 ${c.glow} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />

                      <div className="relative">
                        {/* Step number — bien visible */}
                        <div className="flex items-center gap-4 mb-6">
                          <span className={`font-[family-name:var(--font-cormorant)] text-5xl font-bold ${c.number} leading-none`}>
                            {step.number}
                          </span>
                          <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg ${c.icon}`}>
                            {step.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-4">
                          {step.title}
                        </h3>

                        {/* Details */}
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-raleway)] text-cream/60 text-sm">
                              <span className={`${c.bullet} mt-0.5`}>•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Note */}
                        {step.note && (
                          <p className={`font-[family-name:var(--font-raleway)] text-xs italic pt-3 border-t border-cream/5 ${c.number} opacity-80`}>
                            {step.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== CALENDLY ====== */}
        <section id="rdv" className="py-20 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                Réserver
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-4">
                Choisis ta guidance & ton créneau
              </h2>
              <p className="font-[family-name:var(--font-raleway)] text-cream/40 text-sm">
                Lumière (45€) · Passage (75€) · Métamorphose (120€)
              </p>
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

            <div className="text-center mt-8 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-cream/30 text-xs">
                Paiement sécurisé · Confirmation par email · Livraison sous 24h
              </p>
            </div>
          </div>
        </section>

        {/* ====== INSTAGRAM CTA ====== */}
        <section className="py-16 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

          <div className="max-w-2xl mx-auto text-center scroll-reveal">
            <p className="font-[family-name:var(--font-raleway)] text-cream/40 text-sm mb-6">
              Avis clients et actualités sur Instagram
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
                &copy; 2026 Johanna — Tous droits réservés
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 font-[family-name:var(--font-raleway)] text-[10px] tracking-[0.15em] uppercase">
              <a
                href="mailto:contact@lesguidancesdejo.fr"
                className="text-cream/30 hover:text-gold transition-colors duration-500 normal-case"
              >
                contact@lesguidancesdejo.fr
              </a>
              <Link href="/deontologie" className="text-cream/30 hover:text-gold transition-colors duration-500">
                Déontologie
              </Link>
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
