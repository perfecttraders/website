import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import { SITE } from '../data/siteData'

function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Contact Perfect Traders" subtitle="Our support and onboarding teams are available to help you get started and scale effectively." />
      <div className="grid gap-5 lg:grid-cols-2">
        <GlassCard>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-slate-300" htmlFor="name">Full Name</label>
              <input id="name" type="text" className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-white outline-none ring-accentBlue focus:ring-2" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300" htmlFor="email">Email</label>
              <input id="email" type="email" className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-white outline-none ring-accentBlue focus:ring-2" placeholder="name@email.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300" htmlFor="message">Message</label>
              <textarea id="message" rows="4" className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-white outline-none ring-accentBlue focus:ring-2" placeholder="Tell us how we can help" />
            </div>
            <button type="button" className="rounded-full bg-gradient-to-r from-accentBlue to-accentRed px-5 py-2 font-semibold text-white">Send Message</button>
          </form>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Support Channels</h3>
          <p className="mt-4 text-slate-300">Email: {SITE.supportEmail}</p>
          <p className="text-slate-300">Telegram: @perfecttraders (placeholder)</p>
          <p className="mt-4 text-slate-400">For platform access and account login, use the official trading portal:</p>
          <a href={SITE.platformUrl} className="mt-2 inline-block text-accentBlue hover:text-white">{SITE.platformUrl}</a>
        </GlassCard>
      </div>
    </div>
  )
}

export default ContactPage
