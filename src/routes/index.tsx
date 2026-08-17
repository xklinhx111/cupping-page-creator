import { ChatWidget } from "@/components/chat-widget";
import { LanguageProvider } from "@/components/language-provider";
import heroImage from "@/assets/hero-cupping.jpg";
import { createFileRoute } from "@tanstack/react-router";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Ventouses & Gua Sha — Ivry-sur-Seine",
  description:
    "Séances de ventouses sèches, Gua Sha et pistolet de massage. Prestation de bien-être et de détente, à Ivry-sur-Seine.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ivry-sur-Seine",
    postalCode: "94200",
    addressCountry: "FR",
  },
  priceRange: "60–90 €",
  currenciesAccepted: "EUR",
  areaServed: [
    "Ivry-sur-Seine",
    "Vitry-sur-Seine",
    "Charenton-le-Pont",
    "Paris 13e",
  ],
  makesOffer: [
    { "@type": "Offer", name: "Séance Ciblée", price: "60", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Séance Complète", price: "90", priceCurrency: "EUR" },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Ventouses & Gua Sha à Ivry-sur-Seine — séance bien-être",
      },
      {
        name: "description",
        content:
          "Séance de ventouses sèches, Gua Sha et pistolet de massage à Ivry-sur-Seine. 45 min ou 1 h, 60 ou 90 € selon la formule. Réservation en ligne.",
      },
      { property: "og:title", content: "Ventouses & Gua Sha à Ivry-sur-Seine" },
      {
        property: "og:description",
        content:
          "Un temps de détente et de relâchement corporel. 45 min ou 1 h, à partir de 60 €. Réservation en ligne.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
});

const techniques = [
  {
    title: "Les ventouses",
    text: "Des cloches de verre ou de silicone posées sur la peau, qui créent une aspiration douce. La peau se soulève, les tissus se décollent, la circulation locale se réveille. Elles restent en place quelques minutes, ou glissent le long du dos.",
  },
  {
    title: "Le Gua Sha",
    text: "Un outil lisse — pierre ou corne — passé sur la peau huilée, avec une pression régulière. Le geste est lent, presque répétitif. Il prolonge le travail des ventouses sur les zones qu'elles atteignent mal : nuque, épaules, avant-bras.",
  },
  {
    title: "Le pistolet de massage",
    text: "Un Theragun PRO, en finition. Des percussions rapides sur le muscle, jamais sur les os ni les articulations. Quelques minutes suffisent. C'est l'outil de la récupération après l'effort — il n'est utilisé que si la séance s'y prête.",
  },
];

const steps = [
  {
    title: "On échange quelques minutes",
    text: "Ce que vous cherchez, comment vous vous sentez, les zones que vous préférez éviter.",
  },
  {
    title: "Questionnaire préalable",
    text: "Court, rempli ensemble à la première séance. Il sert à écarter les situations où la ventouse est déconseillée.",
  },
  {
    title: "Ventouses, puis Gua Sha",
    text: "Vous restez habillé·e hors de la zone travaillée. Les ventouses sont posées puis retirées progressivement, et le Gua Sha se pratique sur peau huilée.",
  },
  {
    title: "Quelques minutes pour revenir",
    text: "On ne se relève pas d'un coup. Puis les conseils : boire de l'eau, couvrir la zone, éviter sauna et piscine pendant 24 h.",
  },
];

const faq = [
  {
    q: "Est-ce que ça fait mal ?",
    a: "Non. La sensation est celle d'une traction ferme sur la peau, parfois surprenante les premières secondes. L'intensité de la succion se règle à tout moment : dites-le simplement et j'ajuste. Une séance ne doit jamais être douloureuse.",
  },
  {
    q: "Ces marques, elles partent en combien de temps ?",
    a: "Entre 3 et 10 jours selon les peaux. Ce sont des cercles rouges à violacés, indolores. C'est l'effet normal de la technique, pas un bleu ni une blessure. Si vous avez un mariage, une séance photo ou la plage dans la semaine, dites-le : on travaille des zones couvertes, ou on décale.",
  },
  {
    q: "Je dois me déshabiller entièrement ?",
    a: "Non. Seule la zone travaillée est découverte, le reste du corps reste couvert. Venez avec un haut confortable, facile à retirer. Vous gardez vos sous-vêtements.",
  },
  {
    q: "Je prends un traitement — je peux venir ?",
    a: "Cela dépend du traitement. Les anticoagulants sont une contre-indication ferme. Pour le reste, écrivez-moi avant de réserver : mieux vaut deux minutes d'échange qu'une séance à annuler sur place. Un questionnaire complet est rempli ensemble à la première venue.",
  },
  {
    q: "Je ne sais pas quelle formule choisir",
    a: "Si vous n'avez jamais fait de ventouses, prenez la Ciblée à 60 € : c'est le bon format pour découvrir la sensation et voir comment votre peau réagit. On passe à la Complète ensuite si ça vous a plu. Et si vous vous êtes trompée, on ajuste sur place.",
  },
  {
    q: "Et si je dois annuler ?",
    a: "Librement, jusqu'à 24 h avant, depuis le lien reçu par e-mail. Aucun frais, aucune justification à donner. En deçà de 24 h, un simple appel suffit.",
  },
  {
    q: "Je règle comment ?",
    a: "Sur place, en fin de séance : espèces, carte ou virement. Facture remise systématiquement.",
  },
];

const contreIndications = [
  "vous prenez un traitement anticoagulant, ou avez un trouble de la coagulation ;",
  "vous avez une plaie, une brûlure ou une infection sur la zone ;",
  "vous avez des varices, une phlébite ou une thrombose ;",
  "vous avez de la fièvre ou une infection en cours ;",
  "vous êtes enceinte ;",
  "vous avez une grosseur ou une lésion non identifiée sur la zone.",
];

function Index() {
  return (
    <LanguageProvider>
      <LandingPage />
      <ChatWidget />
    </LanguageProvider>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl md:text-3xl mt-16 mb-5 pb-2 border-b border-border">
      {children}
    </h2>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-serif text-foreground pb-24 md:pb-0">
      {/* Soft ethereal background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-brand-sage/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-brand-clay/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-2xl px-6">
        {/* Hero */}
        <header className="pt-14 text-center md:pt-20">
          <div className="mx-auto mb-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={heroImage}
              alt="Pose de ventouses lors d'une séance de bien-être"
              className="h-52 w-full object-cover md:h-64"
              loading="eager"
            />
          </div>
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.18em] text-primary">
            Ivry-sur-Seine
          </p>
          <h1 className="mb-4 font-serif text-4xl leading-tight md:text-5xl">
            Ventouses &amp; Gua Sha
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground">
            Un temps pour relâcher ce qui s'est accumulé dans le corps.
            Ventouses posées à sec, Gua Sha, et pistolet de massage si besoin.
          </p>

          <div className="flex flex-wrap overflow-hidden rounded-2xl border border-border bg-card">
            {[
              { b: "45 / 60 min", s: "Selon la formule" },
              { b: "60 ou 90 €", s: "La séance" },
              { b: "À sec", s: "Sans incision" },
            ].map((f, i) => (
              <div
                key={f.b}
                className={`flex-1 basis-32 px-3 py-4 text-center ${
                  i < 2 ? "border-b border-border sm:border-b-0 sm:border-r" : ""
                }`}
              >
                <b className="block whitespace-nowrap text-lg font-semibold">
                  {f.b}
                </b>
                <span className="mt-1 block font-sans text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {f.s}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <a
              href="#reserver"
              className="inline-block rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Voir les créneaux disponibles
            </a>
            <p className="mt-3 font-sans text-xs text-muted-foreground">
              Réservation en ligne · annulation libre jusqu'à 24 h avant
            </p>
          </div>
        </header>

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl border border-brand-clay/40 bg-secondary/60 px-6 py-5 text-sm text-muted-foreground">
          Prestation de bien-être. Je ne suis pas professionnelle de santé : je
          ne pose aucun diagnostic et ne délivre aucun traitement. Cette séance
          ne remplace pas une consultation médicale.
        </div>

        {/* Techniques */}
        <section id="techniques">
          <SectionTitle>Les trois techniques</SectionTitle>
          <p className="text-muted-foreground">
            Elles se combinent au fil de la séance, selon ce que votre corps
            demande ce jour-là.
          </p>
          <div className="mt-6 space-y-7">
            {techniques.map((tech, i) => (
              <div key={tech.title} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/20 font-sans text-sm font-semibold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-base font-semibold">
                    {tech.title}
                  </h3>
                  <p className="m-0 text-[0.97rem] text-muted-foreground">
                    {tech.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formules */}
        <section id="formules">
          <SectionTitle>Les formules</SectionTitle>

          <div className="my-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-sans text-base font-semibold">
                Ciblée · 45 min
              </h3>
              <span className="text-2xl font-semibold">60 €</span>
            </div>
            <p className="mt-3 text-muted-foreground">
              Ventouses et Gua Sha, sur le haut ou le bas du corps. Le bon
              format pour une première fois.
            </p>
            <a
              href="#reserver"
              className="mt-4 inline-block rounded-full border border-primary px-6 py-2.5 font-sans text-sm font-semibold text-primary"
            >
              Réserver cette formule
            </a>
          </div>

          <div className="my-4 rounded-2xl border border-primary bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-sans text-base font-semibold">
                Complète · 1 h
              </h3>
              <span className="text-2xl font-semibold">90 €</span>
            </div>
            <p className="mt-3 text-muted-foreground">
              Ventouses et Gua Sha sur le haut et le bas du corps, finition au
              pistolet de massage.
            </p>
            <a
              href="#reserver"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-semibold text-primary-foreground"
            >
              Réserver cette formule
            </a>
          </div>

          <div className="my-4 space-y-2 rounded-2xl border border-border bg-card/60 p-6 text-sm text-muted-foreground">
            <p className="m-0">
              <strong className="text-foreground">Première séance :</strong> 15
              minutes offertes pour remplir ensemble le questionnaire préalable.
            </p>
            <p className="m-0">
              <strong className="text-foreground">Forfaits 3 séances :</strong>{" "}
              Ciblées 165 € (55 € la séance) · Complètes 245 € (≈82 € la
              séance). Valables 6 mois.
            </p>
            <p className="m-0">
              <strong className="text-foreground">Aucun supplément :</strong>{" "}
              tout est compris dans la formule.
            </p>
          </div>
        </section>

        {/* Déroulé */}
        <section id="deroule">
          <SectionTitle>Comment se passe une séance</SectionTitle>
          <ol className="m-0 list-none space-y-5 p-0">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-12">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-accent/20 font-sans text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <b className="block font-sans text-[0.95rem]">{step.title}</b>
                <span className="text-[0.95rem] text-muted-foreground">
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq">
          <SectionTitle>Les questions qu'on me pose</SectionTitle>
          <div>
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-sans text-[0.97rem] font-semibold">
                  {item.q}
                  <span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-[0.97rem] text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* À savoir */}
        <section id="a-savoir">
          <SectionTitle>À savoir avant de réserver</SectionTitle>
          <div className="rounded-2xl border border-brand-clay/40 bg-secondary/60 px-6 py-5 text-muted-foreground">
            <p className="m-0">
              <strong className="text-foreground">
                Les ventouses laissent des marques.
              </strong>{" "}
              Des cercles rouges à violacés, qui persistent habituellement entre
              3 et 10 jours. C'est l'effet normal de la technique, et c'est sans
              gravité — mais mieux vaut le savoir avant de réserver. Le Gua Sha
              laisse le même type de marques.
            </p>
          </div>

          <h3 className="mb-2 mt-8 font-sans text-base font-semibold">
            Séance déconseillée si
          </h3>
          <ul className="m-0 list-none p-0">
            {contreIndications.map((c) => (
              <li key={c} className="relative pb-2 pl-6 text-muted-foreground">
                <span className="absolute left-0 text-primary">—</span>
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground">
            Cette liste n'est pas exhaustive, et une réponse « oui » n'interdit
            pas toujours la séance. Dans le doute, écrivez-moi avant de réserver
            — on regarde ensemble, ça prend deux minutes.
          </p>
        </section>

        {/* Réserver */}
        <section id="reserver" className="scroll-mt-6">
          <SectionTitle>Réserver</SectionTitle>
          <p className="text-muted-foreground">
            Choisissez votre créneau ci-dessous. Vous recevrez une confirmation
            par e-mail, et le rendez-vous s'ajoutera directement à votre agenda.
          </p>
          <div className="my-5 grid h-72 place-items-center rounded-2xl border border-dashed border-border bg-card px-6 text-center font-sans text-sm text-muted-foreground">
            <span>
              Emplacement du calendrier de réservation (Cal.com) — à connecter.
            </span>
          </div>
          <p className="font-sans text-sm text-muted-foreground">
            Un souci d'affichage ou aucun créneau ne vous convient ? Écrivez-moi,
            j'ouvre régulièrement des disponibilités.
          </p>
        </section>

        {/* Avis */}
        <section id="avis">
          <SectionTitle>Ce qu'en disent les clientes</SectionTitle>
          {[1, 2].map((n) => (
            <blockquote
              key={n}
              className="my-4 rounded-r-2xl border border-l-[3px] border-border border-l-primary bg-card px-6 py-4"
            >
              <p className="mb-2 italic">
                « Avis réel, recueilli avec l'accord de la personne. »
              </p>
              <cite className="font-sans text-sm not-italic text-muted-foreground">
                — Prénom, mois année
              </cite>
            </blockquote>
          ))}
        </section>

        {/* Venir */}
        <section id="venir">
          <SectionTitle>Venir</SectionTitle>
          <p className="font-sans text-sm text-muted-foreground">
            Adresse · 94200 Ivry-sur-Seine
            <br />
            Métro / RER / bus — temps de marche · stationnement · étage
          </p>
          <p className="text-muted-foreground">
            Venez avec un haut confortable, facile à retirer sur la zone
            concernée. Évitez un repas lourd dans l'heure qui précède, et
            prévoyez de ne pas enchaîner sur une séance de sport dans la foulée.
          </p>
          <div className="mt-6 text-center">
            <a
              href="#reserver"
              className="inline-block rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground"
            >
              Choisir mon créneau
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pb-16 pt-8 font-sans text-[0.83rem] leading-relaxed text-muted-foreground">
          <h2 className="mb-2 mt-6 font-sans text-[0.83rem] uppercase tracking-[0.1em] text-foreground">
            Annulation
          </h2>
          <p>
            Annulation et report libres jusqu'à 24 h avant, depuis le lien reçu
            par e-mail. En deçà, le créneau ne peut plus être proposé à
            quelqu'un d'autre : merci de prévenir par téléphone dès que
            possible.
          </p>

          <h2 className="mb-2 mt-6 font-sans text-[0.83rem] uppercase tracking-[0.1em] text-foreground">
            Vos données
          </h2>
          <p>
            Les informations recueillies lors de la réservation et du
            questionnaire préalable servent uniquement à assurer votre sécurité
            pendant la séance et le suivi de votre dossier. La réservation en
            ligne passe par Cal.com ; le questionnaire préalable reste sur un
            poste chiffré, hors de tout service en ligne, et n'est transmis à
            personne. L'ensemble est supprimé 3 ans après notre dernier contact.
            Vous pouvez demander à consulter, corriger ou faire supprimer vos
            données, et retirer votre consentement, en écrivant à l'adresse de
            contact. Vous pouvez introduire une réclamation auprès de la CNIL.
          </p>

          <h2 className="mb-2 mt-6 font-sans text-[0.83rem] uppercase tracking-[0.1em] text-foreground">
            Mentions légales
          </h2>
          <p>
            Prénom Nom, entrepreneure individuelle — Adresse, 94200
            Ivry-sur-Seine
            <br />
            SIRET · téléphone · e-mail
            <br />
            TVA non applicable, article 293 B du CGI
            <br />
            Hébergeur du site : à compléter
          </p>

          <p className="mt-6">
            Prestation de bien-être. Ne constitue ni un acte de soin, ni un
            diagnostic, ni un traitement médical.
          </p>
        </footer>
      </div>

      {/* Sticky mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="font-sans text-xs leading-snug text-muted-foreground">
          <b className="block text-[0.95rem] text-foreground">À partir de 60 €</b>
          Annulation libre 24 h avant
        </div>
        <a
          href="#reserver"
          className="whitespace-nowrap rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground"
        >
          Réserver
        </a>
      </div>
    </div>
  );
}
