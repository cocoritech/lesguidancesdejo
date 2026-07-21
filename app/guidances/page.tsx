"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

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

export default function Guidances() {
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

        {/* ====== MES GUIDANCES ====== */}
        <section className="py-12 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[120px]" />

          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.4em] uppercase mb-4">
                Mes Guidances
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-4">
                Choisis celle qui résonne avec toi
              </h1>
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
                        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-1">
                          Guidance {guidance.name}
                        </h2>
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
                        <p className="font-[family-name:var(--font-raleway)] text-violet-light/60 text-[10px] uppercase tracking-wider mb-3">
                          Inclus
                        </p>
                        <ul className="space-y-2">
                          {guidance.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-raleway)] text-cream text-sm">
                              <span className="text-violet-light mt-0.5">✦</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* For you if */}
                      <div className="pt-4 border-t border-cream/5">
                        <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] uppercase tracking-wider mb-3">
                          Pour toi si...
                        </p>
                        <ul className="space-y-2">
                          {guidance.forYouIf.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-raleway)] text-cream/90 text-xs">
                              <span className="text-gold mt-0.5">→</span>
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

        {/* ====== CALENDLY ====== */}
        <section id="rdv" className="py-20 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <p className="font-[family-name:var(--font-raleway)] text-violet-light/70 text-[10px] tracking-[0.4em] uppercase mb-4">
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

        <Footer />
      </main>
    </div>
  );
}
