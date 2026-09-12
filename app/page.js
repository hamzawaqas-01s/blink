"use client"
import { Shield, Zap, Code2, ArrowDown} from "lucide-react";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";

const phrases = ["Paste a long link.", "Get a short one.", "No account needed."];

const features = [
  {
    icon: Shield,
    title: "Your links, untracked",
    body: "No analytics dashboards built on your visitors' backs. We keep only what's needed to redirect a link — nothing else.",
  },
  {
    icon: Zap,
    title: "No account required",
    body: "Paste a URL, get a short one back. There's no signup wall between you and a working link.",
  },
  {
    icon: Code2,
    title: "Open source, always",
    body: "Every line that redirects your links is public on Github. Read it, fork it, or self-host it yourself.",
  },
];

const steps = [
  { n: "01", title: "Paste your long URL", body: "Drop in any link — no matter how long or ugly." },
  { n: "02", title: "Pick your own slug", body: "Choose a custom ending, or let us generate one for you." },
  { n: "03", title: "Share the short link", body: "It resolves instantly, for as long as you need it to." },
];

const testimonials = [
  {
    name: "Aisha K.",
    role: "Indie hacker",
    quote: "I moved three side-projects off bit.ly the week I found this. No dashboard nagging me to log in just to click a link I made myself.",
  },
  {
    name: "Marcus T.",
    role: "Backend engineer",
    quote: "Ran it past our security review mostly out of habit. Turns out there's genuinely nothing to flag — no tracking pixels, no third-party calls on redirect.",
  },
  {
    name: "Sana R.",
    role: "Newsletter writer",
    quote: "My readers click links from an email client that blocks almost everything else. This is the one shortener that hasn't broken a link yet.",
  },
];


function Hero() {
  const typed = Typewriter(phrases);
  return (
    <main>

    <section className="bg-linear-to-br from-white via-pink-50 to-pink-100">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:justify-between md:py-28">
        <div className="flex w-full flex-col items-center gap-6 text-center md:w-1/2 md:items-start md:text-left">
          <h1 className="text-4xl font-bold italic leading-tight text-purple-900 sm:text-5xl">
            We got tired of link shorteners that wanted more than a URL.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-slate-600">
            Most shorteners ask for an email, drop a tracking cookie, or bury the free tier
            under a paywall. Blink does one thing: it turns a long link into a short one,
            and stays out of the way after that.
          </p>

          <p className="h-5 text-sm font-medium text-purple-700">
            {typed}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <Link href="/shorten" className="rounded-full bg-purple-700 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-700/25 transition-transform hover:-translate-y-0.5">
              Try now
            </Link>
            <Link href="/github" className="rounded-full border border-purple-300 px-6 py-3 font-semibold text-purple-700 transition-transform hover:-translate-y-0.5">
              Github
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md md:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl">
            <div className="flex items-center gap-1.5 border-b border-purple-100 bg-purple-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-purple-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-purple-200" />
            </div>
            <div className="space-y-4 p-6">
              <div className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs text-slate-400">
                yourcompany.com/blog/posts/2026/how-we-cut-onboarding-time-in-half
              </div>
              <div className="flex justify-center text-purple-300">
                <ArrowDown size={20} />
              </div>
              <div className="rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-medium text-white">
                blink.link/onboarding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Features/>
    <Steps/>
    <Testimonials/>
    </main>
  );
}

export default Hero

function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <f.icon size={20} />
            </div>
            <p className="font-semibold text-purple-900">{f.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-bold text-purple-900 md:text-3xl">How a link gets shorter</h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n}>
            <p className="text-sm font-bold text-pink-600">{s.n}</p>
            <p className="mt-2 font-semibold text-purple-900">{s.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-purple-50/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="max-w-md text-2xl font-bold text-purple-900 md:text-3xl">
          People who got tired of the alternatives
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col justify-between rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-700">{t.quote}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-purple-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}