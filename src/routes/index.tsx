import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Truck,
  Home,
  Hammer,
  Trash2,
  Sofa,
  TreePine,
  CheckCircle2,
  Star,
  Clock,
  ShieldCheck,
  Recycle,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import logo from "@/assets/jj-logo.png.asset.json";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JJ Load & Go Services | Junk Removal & Hauling in Northern Virginia" },
      {
        name: "description",
        content:
          "Fast, friendly junk removal, property clean outs, debris hauling and small demolition. Free upfront quotes, same-day pickup. Call 571-428-6909.",
      },
      { property: "og:title", content: "JJ Load & Go Services | We Haul It All" },
      {
        property: "og:description",
        content:
          "Family owned junk removal and hauling. Free quotes, same-day service, no hidden fees. Call 571-428-6909.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "571-428-6909";
const TEL = "tel:5714286909";

const services = [
  {
    icon: Truck,
    title: "Junk Removal",
    body: "Single items or a full truckload. We lift, load and haul it away — you never touch a thing.",
  },
  {
    icon: Home,
    title: "Property Clean Outs",
    body: "Estates, rentals, foreclosures, basements and garages emptied and swept clean.",
  },
  {
    icon: Trash2,
    title: "Debris Removal",
    body: "Construction debris, drywall, lumber and remodel leftovers cleared from your site.",
  },
  {
    icon: Hammer,
    title: "Small Demolition",
    body: "Sheds, decks, fences and interior tear-outs — demoed and hauled in one visit.",
  },
  {
    icon: Sofa,
    title: "Furniture & Appliances",
    body: "Couches, mattresses, refrigerators and hot tubs removed from any floor of the home.",
  },
  {
    icon: TreePine,
    title: "Yard Waste Hauling",
    body: "Branches, brush, soil, fencing and storm cleanup loaded and disposed of responsibly.",
  },
];

const steps = [
  { n: "01", t: "Call or Text", d: "Tell us what you need gone. Photos help us quote faster." },
  { n: "02", t: "Free Upfront Price", d: "We confirm the price on site before any work starts." },
  { n: "03", t: "We Load & Go", d: "Crew loads everything, sweeps up and hauls it away same day." },
];

const testimonials = [
  {
    name: "Marcus D.",
    place: "Alexandria, VA",
    text: "Called in the morning, garage was empty by 4pm. Fair price, no surprises, and they swept the floor before leaving.",
  },
  {
    name: "Denise R.",
    place: "Arlington, VA",
    text: "We cleared out my mother's house after 30 years. They were patient, respectful and donated what could be reused.",
  },
  {
    name: "Tony P.",
    place: "Fairfax, VA",
    text: "Contractor debris from a full kitchen remodel gone in one load. Way cheaper than renting a dumpster.",
  },
];

const trust = [
  { icon: Clock, t: "Same-Day Service", d: "Often out the same day you call." },
  { icon: ShieldCheck, t: "Upfront Pricing", d: "No hidden fees, ever." },
  { icon: Recycle, t: "Donate & Recycle", d: "We keep usable items out of landfills." },
  { icon: Star, t: "Family Owned", d: "Local crew you can trust." },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={TEL}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display text-lg tracking-wide text-primary-foreground shadow-[var(--shadow-red)] transition hover:brightness-110 active:scale-[0.98] ${className}`}
    >
      <Phone className="h-5 w-5 shrink-0" />
      {PHONE}
    </a>
  );
}

function TrailerLoad({ pct, label }: { pct: number; label: string }) {
  // trailer interior: x 118→214, floor y 72, ceiling y 30
  const floor = 72;
  const maxH = 42;
  const h = (maxH * pct) / 100;
  const y = floor - h;
  return (
    <svg
      viewBox="0 0 224 92"
      className="mx-auto w-full max-w-[13rem]"
      role="img"
      aria-label={`Pickup truck with a small trailer filled to a ${label}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        {/* pickup truck: cab + bed, facing left */}
        <path d="M6 72 V56 L18 40 H40 V56 H6" className="text-foreground/80" />
        <path d="M40 72 V44 H62 V72" className="text-foreground/80" />
        <path d="M62 62 H104" className="text-foreground/80" />
        <path d="M104 62 V68" className="text-foreground/80" />
        {/* hitch */}
        <path d="M104 68 H118" className="text-foreground/40" />
        {/* trailer box */}
        <path d="M118 72 V30 H214 V72 Z" className="text-foreground/80" />
      </g>
      {/* load fill */}
      <rect x="120" y={y} width="92" height={h} rx="1.5" fill="var(--color-primary)" opacity="0.9" />
      {/* wheels */}
      <g fill="currentColor" className="text-foreground/80">
        <circle cx="24" cy="76" r="8" />
        <circle cx="86" cy="76" r="8" />
        <circle cx="166" cy="78" r="7" />
      </g>
      <g fill="var(--color-card)">
        <circle cx="24" cy="76" r="3" />
        <circle cx="86" cy="76" r="3" />
        <circle cx="166" cy="78" r="2.5" />
      </g>
      {/* ground */}
      <path d="M2 86 H222" stroke="currentColor" strokeWidth="2" className="text-border" />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Services", "#services"],
    ["How It Works", "#how"],
    ["Pricing", "#pricing"],
    ["Reviews", "#reviews"],
    ["About", "#about"],
    ["Quote", "#quote"],
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-[0.18em] uppercase sm:text-sm">
          We Haul It All — Free Quotes, Same-Day Pickup
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="JJ Load & Go Services logo"
              className="logo-chip h-12 w-auto shrink-0 p-1 sm:h-14"
            />

            <span className="min-w-0 truncate font-display text-lg leading-tight sm:text-xl">
              JJ Load &amp; Go <span className="text-primary">Services</span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-semibold tracking-wide uppercase text-muted-foreground transition hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href={TEL}
              className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-display tracking-wide text-primary-foreground shadow-[var(--shadow-red)] transition hover:brightness-110 sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="rounded-md border border-border p-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-surface px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 font-semibold tracking-wide uppercase text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {label}
                </a>
              ))}
              <CallButton className="mt-3 w-full" />
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Crew loading an old sofa into a red truck and trailer outside a suburban home"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-36 lg:px-8">
          <div className="on-dark max-w-2xl">
            <p className="mb-4 inline-block border border-primary/60 bg-primary/25 px-3 py-1.5 text-xs font-bold tracking-[0.22em] uppercase text-steel">
              Reliable · Professional · Family Owned
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl">
              Junk gone today.
              <span className="block text-primary">We haul it all.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel">
              Furniture, appliances, construction debris, whole-property clean outs and small
              demolition. One call, one crew, one clean space — with a free upfront price before we
              start.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-steel/40 bg-ink/50 px-6 py-3.5 font-display text-lg tracking-wide text-steel transition hover:bg-ink/80"
              >

                Get a free quote <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-steel">
              {["Same-day pickup", "No hidden fees", "We sweep up after", "Licensed & insured"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-10 lg:grid-cols-4 lg:px-8">
          {trust.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3 px-2 py-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-display text-base">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl rule-red">
            <h2 className="text-4xl md:text-5xl">What we take away</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If two people can carry it and it isn't hazardous, it goes in the trailer. Here's what
              we handle most.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-lift)]"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-red)" }}
                />
                <Icon className="h-9 w-9 text-primary" />
                <h3 className="mt-5 text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section-pad border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl rule-red">
            <h2 className="text-4xl md:text-5xl">How it works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps, zero heavy lifting on your end.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ n, t, d }) => (
              <div key={n} className="relative rounded-lg border border-border bg-card p-8">
                <span className="font-display text-6xl text-primary/25">{n}</span>
                <h3 className="mt-2 text-2xl">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl">How pricing works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We price by how much space your stuff takes up in the trailer. You get a firm number
              before we lift a finger — no hourly surprises, no hidden dump fees.
            </p>
          </div>

          <div className="mt-14 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                icon: Truck,
                t: "Priced by the load",
                d: "We quote on truck space, not the clock. An eighth, a quarter, a half or a full trailer — you only pay for the room your items take.",
              },
              {
                icon: Sofa,
                t: "What affects the cost",
                d: "Item type, weight, and how hard it is to reach. Upstairs, tight basements, heavy materials and disposal fees can move the number.",
              },
              {
                icon: CheckCircle2,
                t: "Free, no-pressure quote",
                d: "Text a photo for a ballpark, or we confirm the exact price on site. If it isn't right for you, we leave — no charge.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex flex-col items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </span>
                <h3 className="mt-5 text-2xl">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-lift)]">
            <div className="border-b border-border px-6 py-5 text-center md:px-10">
              <h3 className="text-2xl">Typical load sizes</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ballpark ranges for the Northern Virginia area. Your exact price is confirmed on
                site before work begins.
              </p>
            </div>
            <div className="grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
              {[
                { size: "1/8 Load", price: "$99 – $175", ex: "One appliance, a few boxes" },
                { size: "1/4 Load", price: "$175 – $299", ex: "Couch or mattress set" },
                { size: "1/2 Load", price: "$299 – $475", ex: "Garage or small basement" },
                { size: "Full Load", price: "$475 – $699", ex: "Whole-home clean out" },
              ].map((l, i) => (
                <div key={l.size} className="bg-card p-7 text-center">
                  <TrailerLoad pct={[12.5, 25, 50, 100][i]} label={l.size} />

                  <p className="mt-4 font-display text-xl">{l.size}</p>
                  <p className="mt-1 font-display text-2xl text-primary">{l.price}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{l.ex}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 border-t border-border px-6 py-7 text-center sm:flex-row sm:justify-center">
              <p className="font-semibold">Not sure which size you need?</p>
              <CallButton className="text-base" />
            </div>
          </div>
        </div>
      </section>



      {/* About */}
      <section id="about" className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="rule-red">
            <h2 className="text-4xl md:text-5xl">A local crew that shows up</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              JJ Load &amp; Go Services is a family-owned hauling company. We started with one truck,
              one trailer and a simple promise: give people an honest price, arrive when we say we
              will, and leave the space cleaner than we found it.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every job is quoted before work starts, and whatever can be donated or recycled gets
              dropped off instead of dumped. That's how we've built a customer list that keeps
              calling us back.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["1,200+", "Loads hauled"],
                ["Same day", "Typical response"],
                ["5★", "Neighbor rated"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-primary">{k}</dt>
                  <dd className="text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={logo.url}
              alt="JJ Load & Go Services — junk removal, property clean out, debris removal, small demolition"
              loading="lazy"
              className="mx-auto w-full max-w-md rounded-lg border border-border logo-chip bg-ink p-3 shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="section-pad border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl rule-red">
            <h2 className="text-4xl md:text-5xl">Neighbors who called us</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-lg border border-border bg-card p-8">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="font-display text-lg">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div
            className="rounded-xl border border-primary/40 p-8 text-center md:p-14"
            style={{ background: "var(--gradient-red)" }}
          >
            <h2 className="text-4xl text-primary-foreground md:text-6xl">
              Contact us today for free quotes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
              Send a photo of the pile and we'll price it on the spot. No obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-background px-8 py-4 font-display text-2xl tracking-wide text-foreground transition hover:bg-card"
              >
                <Phone className="h-6 w-6 text-primary" />
                {PHONE}
              </a>
              <a
                href="sms:5714286909"
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/50 px-8 py-4 font-display text-2xl tracking-wide text-primary-foreground transition hover:bg-black/15"
              >
                Text us a photo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3 lg:px-8">
          <div>
            <img src={logo.url} alt="JJ Load & Go Services" loading="lazy" className="logo-chip h-20 w-auto p-1" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Junk removal, clean outs, debris hauling and small demolition. Reliable. Professional.
              Family owned.
            </p>
          </div>
          <div>
            <p className="font-display text-lg">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-lg">Get in touch</p>
            <a href={TEL} className="mt-4 inline-flex items-center gap-2 font-display text-2xl text-primary">
              <Phone className="h-5 w-5" />
              {PHONE}
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Serving Northern Virginia and the DC metro area.
              <br />
              Open 7 days a week.
            </p>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} JJ Load &amp; Go Services. All rights reserved.
        </div>
      </footer>

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <CallButton className="w-full" />
      </div>
      <div className="h-20 sm:hidden" />
    </div>
  );
}
