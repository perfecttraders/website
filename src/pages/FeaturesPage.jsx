import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'

const featureList = [
  { title: 'Fast Execution', desc: 'Ultra-low latency trade routing ensures your strategies are executed with precision and speed.' },
  { title: 'Secure Trading', desc: 'Bank-grade encryption, two-factor authentication, and account-level risk controls keep capital protected.' },
  { title: 'Advanced Tools', desc: 'Professional charting, technical indicators, and multi-device workspace for tactical flexibility.' },
  { title: 'Market Signals', desc: 'Curated trading signals and macro insights to help identify high-probability setups.' },
  { title: 'Account Management', desc: 'Dedicated support pathways and smart analytics to optimize account performance.' }
]

function FeaturesPage() {
  return (
    <div>
      <SectionHeading title="A complete trading stack for market professionals" subtitle="Every feature is designed to improve confidence, control, and execution quality." />
      <div className="grid gap-5 md:grid-cols-2">
        {featureList.map((item) => (
          <GlassCard key={item.title}>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

export default FeaturesPage
