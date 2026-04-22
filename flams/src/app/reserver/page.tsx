import { CtaButton } from "@/components/cta-button";

export default function ReserverPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-black uppercase">Réserver</h1>
      <p className="mt-6 max-w-2xl text-lg text-neutral-700">
        Connecte ici ton outil de réservation ou ajoute un formulaire de
        contact.
      </p>

      <div className="mt-8">
        <CtaButton href="#">Accéder à la réservation</CtaButton>
      </div>
    </main>
  );
}
