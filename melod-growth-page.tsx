import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Megaphone,
  PenLine,
  Target,
  Share2,
  Sparkles,
  Video,
  Search,
  Bot,
  Workflow,
  CalendarClock,
  Stethoscope,
  GraduationCap,
  Rocket,
  BookOpen,
  TrendingUp,
  Cpu,
  BarChart3,
  Users,
  Handshake,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { BrandImage } from "@/components/BrandImage";

import logoAsset from "@/assets/melod-growth-logo.png.asset.json";
import heroAsset from "@/assets/melod-growth-facebook-cover.png.asset.json";
import supportingAsset from "@/assets/melod-growth-supporting.png.asset.json";

const LOGO_SRC = logoAsset.url;
const HERO_SRC = heroAsset.url;
const SUPPORTING_SRC = supportingAsset.url;

const TITLE = "Melod Growth | Digital Marketing & Business Growth Agency";
const DESCRIPTION =
  "Melod Growth helps businesses get more clients through digital marketing, Google Ads, Meta Ads, social media marketing, branding, SEO, AI marketing and automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_SRC },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: HERO_SRC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Melod Growth",
          description: DESCRIPTION,
          slogan: "We Help You Get More Clients",
          url: "/",
          logo: LOGO_SRC,
          image: HERO_SRC,
        }),
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Target Clients", href: "#target-clients" },
  { label: "Content Pillars", href: "#content-pillars" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Megaphone,
    name: "Digital Marketing",
    text: "End-to-end digital marketing built around research, strategy and measurable growth.",
  },
  {
    icon: PenLine,
    name: "Content Writing & Video Creation",
    text: "Written and video content created to explain your offer clearly and attract the right clients.",
  },
  {
    icon: Target,
    name: "Google Ads & Meta Ads",
    text: "Paid campaigns on Google Ads and Meta Ads, structured and optimised to reach buyers.",
  },
  {
    icon: Share2,
    name: "Social Media Marketing",
    text: "Social campaigns that build reach, engagement and consistent client enquiries.",
  },
  {
    icon: Sparkles,
    name: "Branding",
    text: "A clear, confident brand direction so your business looks credible everywhere it appears.",
  },
  {
    icon: Video,
    name: "Content & Video Marketing",
    text: "Distribution strategy that puts your content and videos in front of the right audience.",
  },
  {
    icon: Search,
    name: "SEO",
    text: "On-page and technical SEO so people can find your business in search results.",
  },
  {
    icon: Bot,
    name: "AI Marketing",
    text: "AI-assisted marketing workflows that speed up research, creation and campaign testing.",
  },
  {
    icon: Workflow,
    name: "AI Automation",
    text: "Automations that remove repetitive marketing work and keep follow-up consistent.",
  },
  {
    icon: CalendarClock,
    name: "Social Media Management",
    text: "Day-to-day management of your channels: planning, publishing and community replies.",
  },
];

const CLIENTS = [
  {
    icon: Stethoscope,
    name: "Hospitals & Clinics",
    text: "Marketing that helps healthcare providers reach and inform more patients.",
  },
  {
    icon: GraduationCap,
    name: "Education Centers & Institutes",
    text: "Campaigns and content that bring more enquiries and admissions to education providers.",
  },
  {
    icon: Rocket,
    name: "Startups",
    text: "Positioning, content and paid campaigns that help startups find their first and next clients.",
  },
];

const PILLARS = [
  { icon: BookOpen, name: "Marketing Education", text: "Marketing tips, psychology, strategies." },
  { icon: TrendingUp, name: "Business Growth", text: "How businesses can increase clients." },
  { icon: Cpu, name: "AI Marketing", text: "AI tools & automation." },
  { icon: BarChart3, name: "Case Studies", text: "Client results and campaigns." },
  { icon: Users, name: "Behind the Scenes", text: "Melod Growth team/work." },
  { icon: Handshake, name: "Offers & Services", text: "What Melod Growth can do." },
];

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <BrandImage
      src={LOGO_SRC}
      alt="Melod Growth logo"
      className={className}
      fallbackLabel="Melod Growth"
      fallbackClassName="h-9 px-4 py-0 rounded-lg"
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
          <Logo />
          <span className="font-display text-base font-semibold tracking-tight">Melod Growth</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:inline-flex"
          >
            Get More Clients
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get More Clients
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
    </div>
  );
}

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="hero-surface relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div className="reveal">
              <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">Melod Growth</p>
              <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">We Help You Get More Clients</h1>
              <p className="mt-6 text-lg font-medium text-muted-foreground sm:text-xl">Research. Strategy. Marketing. Growth</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Melod Growth is a digital marketing and business growth agency. We combine research, strategy, paid ads, content, SEO and AI automation to help businesses reach the right people and turn attention into clients.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">Get More Clients <ArrowRight className="h-4 w-4" /></a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">Explore Services</a>
              </div>
            </div>

            <figure className="reveal surface-card overflow-hidden rounded-3xl p-2">
              <BrandImage src={HERO_SRC} alt="Melod Growth — We Help You Get More Clients" className="h-auto w-full rounded-2xl object-contain" fallbackLabel="Facebook cover — upload to /public/images" fallbackClassName="aspect-[16/9]" />
            </figure>
          </div>
        </section>

        <div className="rule-line mx-auto max-w-7xl" />

        <section id="services" className="scroll-mt-24 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Services" title="Marketing built for business growth" intro="Ten focused services covering digital marketing, paid ads, content, branding, SEO, AI marketing and automation — delivered as one growth system." />
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, name, text }) => (
                <li key={name} className="surface-card surface-card-hover rounded-2xl p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="target-clients" className="scroll-mt-24 bg-card/40 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Target Clients" title="Who we work with" intro="Melod Growth focuses on three types of organisations, so every strategy is built on real understanding of the audience." />
            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {CLIENTS.map(({ icon: Icon, name, text }) => (
                <li key={name} className="surface-card surface-card-hover rounded-2xl p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-6 text-xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="content-pillars" className="scroll-mt-24 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-8">
            <div>
              <SectionHeading eyebrow="Content Pillars" title="What we publish" intro="Our content follows six pillars that show how marketing works, how businesses grow, and how Melod Growth works with clients." />
              <ul className="mt-12 grid gap-5 sm:grid-cols-2">
                {PILLARS.map(({ icon: Icon, name, text }) => (
                  <li key={name} className="surface-card surface-card-hover rounded-2xl p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <h3 className="mt-4 text-base font-semibold">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="surface-card overflow-hidden rounded-3xl p-2 lg:sticky lg:top-28">
              <BrandImage src={SUPPORTING_SRC} alt="Melod Growth marketing team strategy and growth visual" className="h-auto w-full rounded-2xl object-contain" fallbackLabel="Supporting visual — upload to /public/images" fallbackClassName="aspect-[4/5]" />
            </figure>
          </div>
        </section>

        <section id="contact" className="hero-surface scroll-mt-24 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <Logo className="mx-auto h-12 w-auto" />
            <h2 className="mt-8 text-3xl font-semibold sm:text-4xl lg:text-5xl">Ready to get more clients?</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">Research. Strategy. Marketing. Growth — tell us about your business and we will build the plan to reach more of the right people.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="tel:+916000231639" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"><Phone className="h-4 w-4" /> +91 6000231639</a>
              <a href="mailto:melodgrowth@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"><Mail className="h-4 w-4" /> melodgrowth@gmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:px-8">
          <div>
            <div className="flex items-center gap-3"><Logo /><span className="font-display text-base font-semibold">Melod Growth</span></div>
            <p className="mt-5 text-sm font-medium text-foreground">We Help You Get More Clients</p>
            <p className="mt-1 text-sm text-muted-foreground">Research. Strategy. Marketing. Growth</p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="tel:+916000231639" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><Phone className="h-4 w-4" /> +91 6000231639</a>
              <a href="mailto:melodgrowth@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><Mail className="h-4 w-4" /> melodgrowth@gmail.com</a>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="sm:justify-self-end">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}><a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
