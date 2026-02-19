import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'

const plans = [
  { name: 'Basic', spread: 'From 1.4 pips', leverage: 'Up to 1:200', support: 'Standard', signals: 'Weekly' },
  { name: 'Pro', spread: 'From 0.8 pips', leverage: 'Up to 1:400', support: 'Priority', signals: 'Daily' },
  { name: 'VIP', spread: 'From 0.2 pips', leverage: 'Up to 1:500', support: 'Dedicated Manager', signals: 'Real-time' }
]

function PricingPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Account plans tailored to your trading style" subtitle="Choose the right setup for your volume, strategy, and support requirements." />
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard key={plan.name}>
            <p className="text-2xl font-semibold text-white">{plan.name}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Spreads: {plan.spread}</li>
              <li>Leverage: {plan.leverage}</li>
              <li>Support: {plan.support}</li>
              <li>Signals: {plan.signals}</li>
            </ul>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-slate-300">
              <th className="px-3 py-2">Feature</th>
              <th className="px-3 py-2">Basic</th>
              <th className="px-3 py-2">Pro</th>
              <th className="px-3 py-2">VIP</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10"><td className="px-3 py-2">Minimum Deposit</td><td className="px-3 py-2">$100</td><td className="px-3 py-2">$2,000</td><td className="px-3 py-2">$10,000</td></tr>
            <tr className="border-b border-white/10"><td className="px-3 py-2">Execution Priority</td><td className="px-3 py-2">Standard</td><td className="px-3 py-2">High</td><td className="px-3 py-2">Highest</td></tr>
            <tr><td className="px-3 py-2">Analyst Sessions</td><td className="px-3 py-2">Monthly</td><td className="px-3 py-2">Weekly</td><td className="px-3 py-2">On-demand</td></tr>
          </tbody>
        </table>
      </GlassCard>
    </div>
  )
}

export default PricingPage
