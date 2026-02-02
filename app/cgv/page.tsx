import Link from "next/link";

export const metadata = {
  title: "CGV | Les Guidances de Jo",
};

export default function CGV() {
  return (
    <main className="min-h-screen cosmic-bg relative">
      {/* Navigation */}
      <nav className="glass border-b border-cream/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-gold"
          >
            Les Guidances de Jo
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-raleway)] text-[10px] text-cream/50 hover:text-gold transition-colors duration-500 uppercase tracking-[0.15em]"
          >
            Retour
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="font-[family-name:var(--font-raleway)] text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
          Informations légales
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-16">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-10 font-[family-name:var(--font-raleway)] text-cream/60 text-sm leading-[1.9]">
          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 1 — Objet
            </h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) définissent les
              droits et obligations des parties dans le cadre des prestations
              de services proposées par Johanna, exerçant sous le nom
              commercial « Les Guidances de Jo », ci-après dénommée « la
              Praticienne ».
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 2 — Prestations
            </h2>
            <p className="mb-4">
              La Praticienne propose des guidances de cartomancie intuitive.
              Trois formules sont disponibles :
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                <span><strong className="text-cream/70">Guidance Lumière</strong> (45€) : 1 tirage oracles, 1 Arcane Majeur du Tarot, photos + interprétation vocale</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                <span><strong className="text-cream/70">Guidance Passage</strong> (75€) : 1 tirage oracles, 1 tirage Tarot, 1 tirage conseils, photos + interprétations vocales</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                <span><strong className="text-cream/70">Guidance Métamorphose</strong> (120€) : 1 tirage oracles, 1 tirage Météo Énergétique, 1 tirage Tarot, 1 tirage de clarification, 1 tirage conseils, photos + interprétations vocales</span>
              </li>
            </ul>
            <p>
              Ces prestations s&apos;inscrivent dans une démarche de
              développement personnel et ne se substituent en aucun cas à un
              avis médical, psychologique ou juridique.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 3 — Prise de rendez-vous et déroulement
            </h2>
            <p className="mb-4">
              Les rendez-vous sont pris via la plateforme Calendly. La
              réservation d&apos;un créneau vaut acceptation des présentes CGV.
              Toute consultation doit être réglée en ligne lors de la prise de rendez-vous.
            </p>
            <p className="mb-4">
              Après réservation, le client doit transmettre par WhatsApp, 24h avant le rendez-vous :
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                Une photo récente de lui-même
              </li>
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                Sa date de naissance
              </li>
            </ul>
            <p>
              La guidance est délivrée exclusivement par messages WhatsApp (photos des tirages + interprétations vocales).
              Le client n&apos;a aucune question à poser : les cartes révèlent ce qui doit être entendu.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 4 — Tarifs
            </h2>
            <p>
              Les tarifs des consultations sont indiqués sur la page de
              réservation Calendly. La Praticienne se réserve le droit de
              modifier ses tarifs à tout moment. Les consultations déjà
              réservées et payées ne sont pas impactées par une modification
              tarifaire ultérieure.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 5 — Annulation et report
            </h2>
            <ul className="list-none space-y-2">
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                Toute annulation doit intervenir au minimum 48 heures avant le rendez-vous prévu.
              </li>
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                En cas d&apos;annulation tardive (moins de 48h) ou d&apos;absence sans prévenir, la consultation est considérée comme due et aucun remboursement ne pourra être effectué.
              </li>
              <li className="flex gap-3">
                <span className="text-gold/40 mt-1">—</span>
                Un report est possible sous réserve de disponibilité et dans le respect du délai de 48 heures.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 6 — Responsabilité
            </h2>
            <p>
              Les consultations de cartomancie sont des prestations de
              guidance et de conseil. La Praticienne ne peut être tenue
              responsable des décisions prises par le client à la suite
              d&apos;une consultation. Les informations transmises lors des
              séances sont données à titre indicatif et ne constituent pas des
              prescriptions.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 7 — Confidentialité
            </h2>
            <p>
              La Praticienne s&apos;engage à respecter la confidentialité de
              toutes les informations partagées lors des consultations. Aucune
              information personnelle ne sera communiquée à des tiers sans le
              consentement explicite du client.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 8 — Droit de rétractation
            </h2>
            <p>
              Conformément aux dispositions légales en vigueur, le client
              dispose d&apos;un délai de 14 jours pour exercer son droit de
              rétractation à compter de la date d&apos;achat, sauf si la
              prestation a été exécutée avant l&apos;expiration de ce délai avec
              l&apos;accord du client.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 9 — Données personnelles
            </h2>
            <p>
              Les données personnelles collectées dans le cadre des prises de
              rendez-vous sont traitées conformément au Règlement Général sur
              la Protection des Données (RGPD). Elles sont utilisées
              uniquement pour la gestion des rendez-vous et ne sont jamais
              cédées à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-gold/80 text-base font-medium mb-3 tracking-wide">
              Article 10 — Droit applicable
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, les parties s&apos;engagent à rechercher une solution
              amiable avant toute action judiciaire.
            </p>
          </section>

          <div className="pt-10">
            <div className="h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent mb-6" />
            <p className="text-cream/20 text-[10px] tracking-wider">
              Dernière mise à jour : Février 2026
            </p>
          </div>
        </div>
      </div>

      <footer className="py-8 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent mb-8" />
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-raleway)] text-[10px] text-cream/30 hover:text-gold transition-colors duration-500 uppercase tracking-[0.15em]"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </footer>
    </main>
  );
}
