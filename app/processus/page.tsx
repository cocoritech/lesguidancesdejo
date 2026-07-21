"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Tu réserves ta guidance",
    color: "violet-light",
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
    color: "gold",
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

export default function Processus() {
  useScrollReveal();

  return (
    <div className="grain">
      <main className="min-h-screen cosmic-bg relative">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet/25 rounded-full animate-glow" />
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gold/10 rounded-full animate-glow delay-400" />
        </div>

        <Nav />

        <div className="h-32" />

        <section className="py-12 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-light/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px]" />

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.4em] uppercase mb-4">
                Le processus
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream">
                Comment ça marche
              </h1>
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
                        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-4">
                          {step.title}
                        </h2>

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

            <div className="text-center mt-14 scroll-reveal">
              <a
                href="/guidances#rdv"
                className="group relative inline-flex items-center gap-3 bg-violet/20 hover:bg-violet/30 border border-violet/40 hover:border-violet-light/50 text-cream font-[family-name:var(--font-raleway)] px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-700 hover:scale-105"
              >
                <span className="w-2 h-2 bg-violet-light rounded-full group-hover:animate-pulse" />
                Réserver ma guidance
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
