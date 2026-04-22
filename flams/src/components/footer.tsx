import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#111] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-2xl font-black uppercase">{siteConfig.name}</p>
          <p className="max-w-sm text-sm leading-6 text-white/70">
            Une adresse conviviale pour partager des instants gourmands autour
            d’une cuisine généreuse.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Navigation
          </p>
          <div className="grid gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>contact@flams.fr</p>
            <p>01 23 45 67 89</p>
            <p>Paris · Lyon · Lille</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
