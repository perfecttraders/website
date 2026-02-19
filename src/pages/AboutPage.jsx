import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'

function AboutPage() {
  return (
    <div className="space-y-10">
      <Seo title="About" description="Learn about Perfect Traders, our mission, vision, and the trading community we are building." />
      <SectionHeading
        title="Built for modern traders who expect more"
        subtitle="Perfect Traders delivers a premium brokerage experience with transparent operations, robust technology, and a trader-first philosophy."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Company Overview</h3>
          <p className="mt-3 text-slate-300">We provide seamless access to forex and CFD markets with institutional-grade infrastructure tailored for retail and professional clients.</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Mission & Vision</h3>
          <p className="mt-3 text-slate-300">Our mission is to empower traders with tools, insights, and execution quality that turn strategy into measurable outcomes.</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Trading Community</h3>
          <p className="mt-3 text-slate-300">Perfect Traders fosters a collaborative community where education, signal insights, and market commentary support long-term growth.</p>
        </GlassCard>
      </div>
    </div>
  )
}

export default AboutPage
