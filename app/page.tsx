'use client'
import Layout from '@/components/common/Layout'
import React from 'react'
import { testimonials } from '@/data/testimonials'
import { resources } from '@/data/resources'

function HeroNowlez() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-fuchsia-600 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-6xl">Your AI Legal Companion</h1>
        <p className="mb-8 max-w-2xl text-white/80">Nowlez.Ai simplifies legal research, drafting, and analysis—so lawyers can focus on strategy, not paperwork.</p>
        <div className="flex flex-wrap gap-3">
          <a href="#get-started" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">Get Started</a>
          <a href="#how-it-works" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">See How It Works</a>
        </div>
        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5 text-white/80">
          Futuristic yet professional: imagine AI assisting a lawyer in a courtroom or library.
        </div>
      </div>
    </section>
  )
}

function AboutProblem() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-3 text-2xl font-semibold">Law is complex. We make it clear.</h2>
      <p className="mb-8 max-w-3xl text-black/70">Lawyers lose hours every week to research rabbit holes, formatting, and procedural paperwork. Nowlez streamlines the grind so you can invest effort where it matters most—strategy, advocacy, and client service.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="mb-2 font-semibold">Traditional</h3>
          <ul className="list-disc pl-5 text-black/70">
            <li>Manual case law searches across multiple databases</li>
            <li>Drafting from scratch; iterative redlines</li>
            <li>Context scattered across notes and emails</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="mb-2 font-semibold">With Nowlez</h3>
          <ul className="list-disc pl-5 text-black/70">
            <li>Instant case and statute analysis with citations</li>
            <li>Draft contracts, petitions, and compliance docs in minutes</li>
            <li>Centralized knowledge with expert-backed references</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-black/70">{desc}</p>
    </div>
  )
}

function CoreFeatures() {
  const features = [
    { title: 'AI Research Assistant', desc: 'Instant case law and statute analysis with contextual summaries and links.' },
    { title: 'Drafting & Review', desc: 'Contracts, petitions, and compliance reviews done in minutes—not days.' },
    { title: 'Expert Knowledge Base', desc: 'Handbooks and insights authored and reviewed by legal experts.' },
    { title: 'Always Accessible', desc: 'Your 24/7 legal companion across devices with enterprise-grade security.' },
  ]
  return (
    <section id="features" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyNowlez() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Why Nowlez.Ai</h2>
          <p className="mb-6 max-w-2xl text-black/70">Speed, accuracy, and tangible cost-savings for the modern practice. Built for lawyers, validated by experts.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-black/10 bg-white p-4 text-center">
              <div className="text-2xl font-semibold">90%</div>
              <div className="text-xs text-black/60">Faster legal research</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4 text-center">
              <div className="text-2xl font-semibold">20+ hrs</div>
              <div className="text-xs text-black/60">Saved per week</div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <h3 className="mb-4 font-semibold">Testimonials</h3>
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="text-black/70">
                “{t.quote}”
                <div className="mt-1 text-xs text-black/60">— {t.author}{t.role ? `, ${t.role}` : ''}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { step: '1', title: 'Ask your legal query', desc: 'Pose a matter, issue, or citation target just like you would to a colleague.' },
    { step: '2', title: 'Get insights + references', desc: 'AI synthesis plus expert-backed references and links to source material.' },
    { step: '3', title: 'Act with confidence', desc: 'Use outputs to draft, argue, negotiate, or decide—faster and with clarity.' },
  ]
  return (
    <section id="how-it-works" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border border-black/10 bg-white p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">{s.step}</div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResourcesHub() {
  return (
    <section id="resources" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl border border-black/10 bg-white p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Resources & Knowledge Hub</h2>
          <div className="flex gap-2">
            <a href="#" className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-50">Download Handbook</a>
            <a href="#" className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90">Read Expert Insights</a>
          </div>
        </div>
        <p className="mb-6 text-black/70">Promote expert analysis and handbooks. Link to your best resources for fast onboarding and deeper understanding.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((r) => (
            <a key={r.title} href={r.href} className="rounded-lg border border-black/10 p-4 hover:bg-gray-50">
              <div className="text-sm font-semibold">{r.title}</div>
              {r.tag && <div className="text-xs text-black/60">{r.tag}</div>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConversionCTA() {
  return (
    <section id="get-started" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="mb-2 text-2xl font-semibold">Revolutionize your practice with AI.</h3>
          <p className="mb-6 max-w-2xl text-white/80">Start a free trial or book a demo to see Nowlez.Ai in action.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">Start Free Trial</a>
            <a href="#" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Book a Demo</a>
          </div>
          <p className="mt-6 text-xs text-white/60">Navigation: About • Features • Resources • Contact · Social • Legal disclaimer</p>
        </div>
      </div>
    </section>
  )
}

export default function NewLandingPage() {
  return (
    <Layout>
      <HeroNowlez />
      <AboutProblem />
      <CoreFeatures />
      <WhyNowlez />
      <HowItWorks />
      <ResourcesHub />
      <ConversionCTA />
    </Layout>
  )
}


