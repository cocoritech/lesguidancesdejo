import Link from "next/link";

export const metadata = {
  title: "CGV | Les Guidances de Jo",
};

export default function CGV() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="bg-dark/80 backdrop-blur-md border-b border-violet/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-gold"
          >
            Les Guidances de Jo
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-raleway)] text-sm text-cream/70 hover:text-gold transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-12">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-8 font-[family-name:var(--font-raleway)] text-cream/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-gold text-lg font-medium mb-3">
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
            <h2 className="text-gold text-lg font-medium mb-3">
              Article 2 — Prestations
            </h2>
            <p>
              La Praticienne propose des consultations de cartomancie et
              d&apos;accompagnement en transition de vie. Ces prestations
              s&apos;inscrivent dans une démarche de développement personnel et
              ne se substituent en aucun cas à un avis médical, psychologique
              ou juridique.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-lg font-medium mb-3">
              Article 3 — Prise de rendez-vous
            </h2>
            <p>
              Les rendez-vous sont pris via la plateforme Calendly. La
              réservation d&apos;un créneau vaut acceptation des présentes CGV.
              Toute consultation doit être réglée selon les modalités
              indiquées lors de la prise de rendez-vous.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-lg font-medium mb-3">
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
            <h2 className="text-gold text-lg font-medium mb-3">
              Article 5 — Annulation et report
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Toute annulation doit intervenir au minimum 24 heures avant le
                rendez-vous prévu.
              </li>
              <li>
                En cas d&apos;annulation tardive (moins de 24h) ou d&apos;absence
                sans prévenir, la consultation est considérée comme due.
              </li>
              <li>
                Un report est possible sous réserve de disponibilité et dans
                le respect du délai de 24 heures.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold text-lg font-medium mb-3">
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
            <h2 className="text-gold text-lg font-medium mb-3">
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
            <h2 className="text-gold text-lg font-medium mb-3">
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
            <h2 className="text-gold text-lg font-medium mb-3">
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
            <h2 className="text-gold text-lg font-medium mb-3">
              Article 10 — Droit applicable
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, les parties s&apos;engagent à rechercher une solution
              amiable avant toute action judiciaire.
            </p>
          </section>

          <div className="pt-8 border-t border-violet/10">
            <p className="text-cream/40 text-xs">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-violet/10 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-raleway)] text-sm text-cream/50 hover:text-gold transition-colors"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </footer>
    </main>
  );
}
