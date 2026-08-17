import { ChatWidget } from "@/components/chat-widget";
import {
  LanguageProvider,
  useLanguage,
} from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cupping.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LeafIcon, MessageCircleIcon, WindIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Soma & Souffle — Thérapie par ventouses à Paris | Cupping Therapy",
      },
      {
        name: "description",
        content:
          "Thérapie par ventouses à Paris : soulagez les tensions, améliorez la circulation et retrouvez l'équilibre. Cupping therapy in Paris.",
      },
      {
        property: "og:title",
        content: "Soma & Souffle — Thérapie par ventouses | Cupping Therapy",
      },
      {
        property: "og:description",
        content:
          "Soulagez les tensions et retrouvez l'équilibre grâce à la thérapie par ventouses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <LandingPage />
      <ChatWidget />
    </LanguageProvider>
  );
}

function LandingPage() {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#approche", label: t("Approche", "Approach") },
    { href: "#services", label: t("Services", "Services") },
    { href: "#faq", label: t("FAQ", "FAQ") },
    { href: "#contact", label: t("Contact", "Contact") },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Soft ethereal background gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-sage/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-clay/8 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 md:px-8 py-5 bg-background/70 backdrop-blur-md border-b border-border/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-serif text-xl md:text-2xl italic text-foreground">
            Soma & Souffle
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-clay transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language toggle */}
            <div className="flex border border-border rounded-full p-1 bg-card/80">
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={cnToggle(language === "fr")}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cnToggle(language === "en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-brand-clay font-semibold">
              {t("Vacuothérapie & Bien-être", "Cupping Therapy & Wellness")}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] text-foreground">
              {t("Relâcher les ", "Release ")}
              <span className="italic text-brand-clay">
                {t("tensions", "tension")}
              </span>
              {t(" par le vide.", " through suction.")}
            </h1>
            <p className="max-w-md text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t(
                "L'art thérapeutique des ventouses pour restaurer la circulation, soulager les douleurs chroniques et libérer l'énergie stagnante.",
                "The therapeutic art of cupping to restore circulation, relieve chronic pain, and release stagnant energy."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                className="bg-brand-dark text-brand-cream hover:bg-brand-dark/90 px-8 py-6 text-xs uppercase tracking-[0.2em] font-semibold rounded-full"
              >
                <a href="#contact">
                  {t("Réserver une séance", "Book a session")}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-xs uppercase tracking-[0.2em] font-semibold rounded-full"
              >
                <a href="#services">
                  {t("Découvrir les soins", "Discover treatments")}
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-muted ring-1 ring-border">
              <img
                src={heroImage}
                alt={t(
                  "Séance de ventouses dans une ambiance zen et lumineuse",
                  "Cupping therapy session in a bright zen atmosphere"
                )}
                width={1024}
                height={1280}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 to-transparent" />
            </div>
          </div>
        </div>
      </header>

      {/* Services / Benefits */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-20 border-b border-border pb-8 gap-4">
            <h2 className="font-serif text-3xl md:text-4xl">
              {t("Nos Pratiques", "Our Practices")}
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground italic">
              {t("Bienfaits de la vacuothérapie", "Benefits of cupping therapy")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <ServiceCard
              icon={<WindIcon className="size-5" />}
              title={t("Drainage Lymphatique", "Lymphatic Drainage")}
              description={t(
                "Stimule l'élimination des toxines et réduit l'inflammation pour une sensation de légèreté immédiate.",
                "Stimulates toxin elimination and reduces inflammation for an immediate feeling of lightness."
              )}
            />
            <ServiceCard
              icon={<LeafIcon className="size-5" />}
              title={t("Récupération Sportive", "Sports Recovery")}
              description={t(
                "Décompresse les tissus myofasciaux pour accélérer la réparation musculaire après l'effort.",
                "Decompresses myofascial tissue to speed muscle recovery after exertion."
              )}
            />
            <ServiceCard
              icon={<MessageCircleIcon className="size-5" />}
              title={t("Équilibre Nerveux", "Nervous Balance")}
              description={t(
                "Une approche douce pour calmer le système nerveux et réduire le stress émotionnel ancré.",
                "A gentle approach to calm the nervous system and reduce anchored emotional stress."
              )}
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approche" className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-clay font-semibold">
              {t("Notre approche", "Our approach")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              {t(
                "Une thérapie ancestrale, une écoute moderne.",
                "An ancestral therapy, a modern listening."
              )}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "Chaque séance débute par un échange personnalisé pour comprendre votre corps, vos tensions et vos objectifs. Les ventouses sont alors posées avec précision sur les zones concernées.",
                  "Each session begins with a personalized conversation to understand your body, tensions, and goals. Cups are then placed precisely on the targeted areas."
                )}
              </p>
              <p>
                {t(
                  "La sensation est celle d'une aspiration ferme et chaleureuse. Laissez-vous porter pendant 30 à 60 minutes dans un environnement calme, parfumé et pensé pour la détente profonde.",
                  "The sensation is that of a firm, warm suction. Let yourself be carried away for 30 to 60 minutes in a calm, scented environment designed for deep relaxation."
                )}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-sage/10 rounded-[2rem] blur-2xl" />
            <div className="relative bg-card rounded-[2rem] p-8 md:p-12 ring-1 ring-border space-y-8">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-brand-clay/10 flex items-center justify-center text-brand-clay shrink-0">
                  <span className="font-serif text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">
                    {t("Consultation", "Consultation")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "On fait le point sur vos besoins et vos zones de tension.",
                      "We review your needs and tension areas."
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-brand-clay/10 flex items-center justify-center text-brand-clay shrink-0">
                  <span className="font-serif text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">
                    {t("Soin sur mesure", "Tailored treatment")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Pose des ventouses adaptées à votre corps et à votre ressenti.",
                      "Cup placement adapted to your body and sensations."
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-brand-clay/10 flex items-center justify-center text-brand-clay shrink-0">
                  <span className="font-serif text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">
                    {t("Conseils & suivi", "Advice & follow-up")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Recommandations personnalisées pour prolonger les bienfaits.",
                      "Personalized recommendations to extend the benefits."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 px-6 md:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            {t("Questions Fréquentes", "Frequently Asked Questions")}
          </h2>
          <div className="divide-y divide-border">
            <FaqItem
              question={t("Est-ce que les ventouses font mal ?", "Does cupping hurt?")}
              answer={t(
                "Non, la sensation est celle d'une pression inverse ferme mais confortable. Nous ajustons l'intensité à votre ressenti.",
                "No, the sensation is that of a firm but comfortable reverse pressure. We adjust the intensity to your comfort."
              )}
            />
            <FaqItem
              question={t("Combien de temps durent les marques ?", "How long do the marks last?")}
              answer={t(
                "Les décolorations circulaires disparaissent généralement entre 3 et 7 jours selon votre circulation.",
                "The circular discolorations usually fade within 3 to 7 days depending on your circulation."
              )}
            />
            <FaqItem
              question={t("À qui s'adresse cette thérapie ?", "Who is this therapy for?")}
              answer={t(
                "Elle convient aux personnes souffrant de tensions musculaires, de stress, de fatigue ou de douleurs chroniques légères.",
                "It is suitable for people suffering from muscle tension, stress, fatigue, or mild chronic pain."
              )}
            />
            <FaqItem
              question={t("Quelle est la durée d'une séance ?", "How long is a session?")}
              answer={t(
                "Comptez entre 45 et 75 minutes selon le soin choisi, dont un temps d'échange initial.",
                "Plan for 45 to 75 minutes depending on the chosen treatment, including an initial consultation."
              )}
            />
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card rounded-[2.5rem] p-10 md:p-16 ring-1 ring-border">
          <h2 className="font-serif text-3xl md:text-5xl">
            {t("Prenez soin de vous.", "Take care of yourself.")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t(
              "Réservez votre première séance de ventouses à Paris et ressentez la différence dès le premier soin.",
              "Book your first cupping session in Paris and feel the difference from the very first treatment."
            )}
          </p>
          <Button
            asChild
            className="bg-brand-clay text-brand-cream hover:bg-brand-clay/90 px-10 py-6 text-xs uppercase tracking-[0.2em] font-semibold rounded-full"
          >
            <a href="mailto:bonjour@soma-souffle.com">
              {t("Réserver par email", "Book by email")}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground pt-4">
            {t(
              "Ou écrivez-nous via le chat en bas à droite.",
              "Or reach us via the chat at the bottom right."
            )}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-cream py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-serif text-2xl italic">Soma & Souffle</div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
            <a href="mailto:bonjour@soma-souffle.com" className="hover:opacity-100 transition-opacity">
              Email
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Instagram
            </a>
          </div>
          <div className="text-[10px] opacity-40 uppercase">
            &copy; {new Date().getFullYear()} Soma & Souffle. Paris, FR.
          </div>
        </div>
      </footer>
    </div>
  );
}

function cnToggle(active: boolean) {
  return `
    px-3 py-1 text-[10px] font-bold rounded-full transition-colors
    ${active ? "bg-brand-dark text-brand-cream" : "text-muted-foreground hover:text-foreground"}
  `;
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="w-12 h-px bg-brand-clay mb-6 group-hover:w-full transition-all duration-700" />
      <div className="size-10 rounded-2xl bg-brand-clay/10 flex items-center justify-center text-brand-clay mb-5">
        {icon}
      </div>
      <h3 className="font-serif text-xl md:text-2xl mb-4">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-6 group">
      <h4 className="font-medium text-sm md:text-base mb-2 text-foreground">
        {question}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
        {answer}
      </p>
    </div>
  );
}
