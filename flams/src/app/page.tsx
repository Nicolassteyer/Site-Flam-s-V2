import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { SectionTitle } from "@/components/section-title";

const featuredDishes = [
  {
    title: "Flammekueche Signature",
    description: "Une recette iconique, croustillante et généreuse à partager.",
    image: "/images/dish-1.svg",
  },
  {
    title: "Création du moment",
    description: "Des recettes de saison imaginées pour surprendre et rassembler.",
    image: "/images/dish-2.svg",
  },
];

const restaurants = [
  "Paris Centre",
  "Lille",
  "Strasbourg",
  "Lyon",
  "Bordeaux",
  "Nantes",
];

const news = [
  {
    title: "La nouvelle suggestion printanière arrive chez Flam’s",
    href: "/actualites",
  },
  {
    title: "Une nouvelle adresse ouvre bientôt ses portes",
    href: "/actualites",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-600">
              Flam’s · Site vitrine
            </p>

            <div className="space-y-4">
              <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
                Le goût du partage.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Une expérience chaleureuse, gourmande et contemporaine autour
                d’une cuisine généreuse à savourer sur place, en famille ou
                entre amis.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <CtaButton href="/reserver">Réserver une table</CtaButton>
              <CtaButton href="/menu" variant="secondary">
                Voir le menu
              </CtaButton>
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero.svg"
              alt="Ambiance Flam’s"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="L’esprit Flam’s"
          title="Une cuisine conviviale, pensée pour les grandes tablées."
          description="Un univers chaleureux, vivant et gourmand, où chaque plat invite au partage et à la découverte."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {featuredDishes.map((dish) => (
            <article
              key={dish.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
            >
              <div className="relative h-80">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-8">
                <h3 className="text-2xl font-black uppercase">{dish.title}</h3>
                <p className="text-neutral-700">{dish.description}</p>
                <Link
                  href="/suggestions"
                  className="inline-block text-sm font-semibold uppercase tracking-[0.15em]"
                >
                  Découvrir
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Nos restaurants"
            title="Retrouve Flam’s près de chez toi."
            description="Des lieux vivants, accueillants et pensés pour partager un bon moment."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-2xl font-black uppercase">{restaurant}</p>
                <p className="mt-2 text-sm text-white/70">
                  Adresse, horaires et réservation.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="/nos-restaurants" variant="secondary">
              Voir tous les restaurants
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Actualités"
          title="Les nouveautés de l’enseigne"
          description="Ouvertures, cartes saisonnières, événements et temps forts."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {news.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[1.5rem] border border-black/10 bg-white p-8 transition hover:-translate-y-1"
            >
              <p className="text-2xl font-black uppercase leading-tight">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
