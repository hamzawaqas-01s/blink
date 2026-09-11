"use client";
import React from "react";
import {
  ShieldCheck,
  Zap,
  Code2,
  ArrowRight,
} from "lucide-react";


const values = [
  {
    icon: ShieldCheck,
    title: "Your links, untracked",
    description:
      "No analytics dashboards built on your visitors' backs. We keep only what's needed to redirect a link — nothing else.",
  },
  {
    icon: Zap,
    title: "No account required",
    description:
      "Paste a URL, get a short one back. There's no signup wall between you and a working link.",
  },
  {
    icon: Code2,
    title: "Open source, always",
    description:
      "Every line that redirects your links is public on GitHub. Read it, fork it, or self-host it yourself.",
  },
];

const steps = [
  {
    number: "01",
    title: "Paste your long URL",
    description: "Drop in any link — no matter how long or ugly.",
  },
  {
    number: "02",
    title: "Pick your own slug",
    description: "Choose a custom ending, or let us generate one for you.",
  },
  {
    number: "03",
    title: "Share the short link",
    description: "It resolves instantly, for as long as you need it to.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-purple-50 to-white">

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Intro */}
        <section className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-900 leading-tight">
            We got tired of link shorteners that wanted more than a URL.
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Most shorteners ask for an email, drop a tracking cookie, or bury
            the free tier under a paywall. Shortify does one thing: it turns
            a long link into a short one, and stays out of the way after
            that.
          </p>
        </section>

        {/* Values */}
        <section className="mt-20 grid sm:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="mt-4 font-bold text-purple-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold text-purple-900">
            How a link gets shorter
          </h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-bold text-pink-500">
                  {step.number}
                </span>
                <h3 className="mt-2 font-semibold text-purple-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-24 bg-purple-900 rounded-3xl px-8 py-12 sm:px-14 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Built in the open.
            </h2>
            <p className="mt-2 text-purple-200 max-w-md">
              Shortify is a small, self-hosted-friendly project. If something
              breaks or you'd like a feature, the issue tracker is the
              fastest way to reach us.
            </p>
          </div>
          <a
            href="https://github.com/hamzawaqas-01s/blink"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-purple-900 font-semibold px-5 py-3 rounded-xl hover:bg-purple-50 transition-colors"
          >
            View on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      </main>
    </div>
  );
}




