import Link from "next/link";

export const metadata = {
  title: "Charte de déontologie | Les Guidances de Jo",
};

export default function Deontologie() {
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
          Éthique & engagement
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-cream mb-4">
          Charte de déontologie
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-violet-light/70 italic mb-16">
          Les Guidances de Jo
        </p>

        <div className="space-y-12 font-[family-name:var(--font-raleway)] text-cream/60 text-sm leading-[1.9]">

          {/* Confidentialité */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-gold text-lg">✦</span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold/90 font-light tracking-wide">
                Confidentialité
              </h2>
            </div>
            <div className="pl-7 space-y-4 border-l border-gold/15">
              <p>
                Les informations personnelles demandées lors d&apos;une prise de rendez-vous sont utilisées
                uniquement à fins professionnelles ; elles me permettent de me connecter à vos énergies
                durant la séance. Ces informations vous seront donc demandées à chaque nouvelle prise de rendez-vous.
              </p>
              <p>
                Une fois la guidance effectuée, je ne garde aucune trace de vous. Veillez donc à bien
                sauvegarder vos messages vocaux afin de pouvoir conserver votre guidance aussi longtemps
                que vous le souhaitez.
              </p>
              <p>
                Le respect de la vie privée étant primordial dans le domaine de la cartomancie / voyance /
                médiumnité, je m&apos;engage à ne divulguer aucune information vous concernant (que ce soit
                votre identité, votre photo ou le contenu de votre guidance).
              </p>
              <p className="text-cream/80 font-medium italic">
                Votre séance est strictement confidentielle.
              </p>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cream/8 to-transparent" />

          {/* Transparence */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-violet-light text-lg">✶</span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-violet-light/90 font-light tracking-wide">
                Transparence
              </h2>
            </div>
            <div className="pl-7 space-y-4 border-l border-violet-light/15">
              <p>
                Ma cartomancie s&apos;adresse exclusivement aux <span className="text-cream/80">femmes de plus de 18 ans</span>.
              </p>
              <p>
                En tant que cartomancienne, les messages que je vous communique me viennent directement des
                cartes (tarots & oracles). Je n&apos;ai donc aucun contrôle sur les messages qui me sont
                communiqués. En revanche, je contrôle à 100% la façon de vous les partager ; avec
                <span className="text-beige"> bienveillance et altruisme</span>.
              </p>
              <p>
                Il est donc de votre responsabilité de vous assurer, avant une consultation, que vous êtes
                capable psychologiquement & émotionnellement de recevoir tous les messages que j&apos;ai pour vous.
              </p>
              <p>
                Une guidance n&apos;étant pas une séance de voyance (même s&apos;il est tout à fait possible
                de recevoir des informations concernant votre avenir et/ou votre passé), il n&apos;est donc
                pas utile de préparer une liste de questions avant votre rendez-vous, ni de me demander de
                dater avec précision un événement à venir. Si je ne vous transmets pas l&apos;information,
                c&apos;est qu&apos;on ne me la donne pas.
              </p>
              <p>
                Mes guidances n&apos;ont pas pour objectif de flatter l&apos;ego, mais plutôt de délivrer
                des messages de guérison qui vont agir comme un soin énergétique chez la consultante et qui,
                après un temps de décantation, permettra d&apos;enclencher les changements nécessaires et
                bénéfiques pour son évolution personnelle.
              </p>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cream/8 to-transparent" />

          {/* Éthique */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-beige text-lg">✩</span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-beige/90 font-light tracking-wide">
                Éthique
              </h2>
            </div>
            <div className="pl-7 space-y-4 border-l border-beige/15">
              <p className="text-cream/80 font-medium">
                Une consultante = une guidance
              </p>
              <p>
                Je ne tire les cartes que pour la consultante qui a réservé et payé sa consultation.
              </p>
              <p>
                Je n&apos;établis aucun diagnostic médical durant une guidance. Je peux simplement vous
                conseiller ou vous orienter à consulter le corps médical, si besoin. Je ne peux en aucun cas
                me substituer au médecin, ni ordonner une quelconque prescription.
              </p>
              <p>
                La dépendance à la voyance étant de plus en plus répandue dans notre société, il est de mon
                devoir en tant que cartomancienne de veiller à ne pas l&apos;alimenter auprès de mes
                consultantes. C&apos;est pourquoi je me réserve le droit de refuser une consultation en cas
                de demandes trop répétitives de la part d&apos;une consultante.
              </p>
              <p>
                Les guidances que j&apos;effectue sont suffisamment riches en informations et ne nécessitent
                pas de faire appel à mes services toutes les semaines.
              </p>
              <p>
                Mes guidances ont pour mission première d&apos;aider les femmes à se réaliser et à
                s&apos;émanciper. La voyance, utilisée à outrance, comporte le risque d&apos;enfermer les
                consultantes dans une forme de fatalité qui les déconnecte de leur pouvoir de décision et
                d&apos;action ; ce qui va à l&apos;encontre de mes valeurs.
              </p>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cream/8 to-transparent" />

          {/* Rappel */}
          <section>
            <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-gold/5 rounded-3xl" />
              <div className="relative">
                <span className="text-gold/40 text-3xl block mb-6">✦</span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold/90 font-light mb-6 tracking-wide">
                  Rappel
                </h2>
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-cream/80 italic mb-4">
                  La cartomancienne n&apos;est que la messagère.
                </p>
                <p className="text-cream/50 mb-2">
                  Je ne pourrai jamais prendre les décisions à votre place.
                </p>
                <p className="text-cream/50 mb-2">
                  Chaque consultante est responsable de ses actions, de ses choix et de sa vie.
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-violet-light/80 italic mt-6">
                  Votre libre-arbitre vous appartiendra toujours.
                </p>
              </div>
            </div>
          </section>

          <div className="pt-4">
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
