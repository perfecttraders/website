import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import { SITE, STATS } from '../data/siteData'

const reasons = [
  'Institutional-grade liquidity and execution stability',
  'Advanced risk controls with secure account protection',
  'Actionable market intelligence for smarter decisions'
]

function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-accentBlue/50 bg-accentBlue/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-accentBlue">
            Next-Generation Forex Brokerage
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Trade Global Markets with <span className="bg-gradient-to-r from-accentBlue to-accentRed bg-clip-text text-transparent">Perfect Traders</span>
          </h1>
          <p className="mt-5 max-w-xl text-slate-300">
            Premium forex infrastructure for serious traders. Built for speed, transparency, and strategic advantage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={SITE.platformUrl} className="rounded-full bg-gradient-to-r from-accentBlue to-accentRed px-6 py-3 font-semibold text-white shadow-glow">Start Trading</a>
            <a href={SITE.platformUrl} className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">Login</a>
          </div>
        </div>
        <GlassCard className="relative overflow-hidden">
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accentBlue/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-accentRed/30 blur-3xl" />
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Live Performance</p>
          <p className="mt-2 text-4xl font-semibold text-white">+18.6%</p>
          <p className="text-sm text-emerald-400">Monthly portfolio growth benchmark</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3"><p className="text-slate-400">EUR/USD</p><p className="text-white">1.0862</p></div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3"><p className="text-slate-400">GBP/USD</p><p className="text-white">1.2734</p></div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3"><p className="text-slate-400">USD/JPY</p><p className="text-white">151.05</p></div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3"><p className="text-slate-400">XAU/USD</p><p className="text-white">2034.98</p></div>
          </div>
        </GlassCard>
      </section>

      <section>
        <SectionHeading title="Trusted by an ambitious global trading community" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <GlassCard key={stat.label}>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {reasons.map((reason) => (
          <GlassCard key={reason}>
            <p className="text-lg font-medium text-white">{reason}</p>
          </GlassCard>
        ))}
      </section>
    </div>
  )
}

export default HomePage
