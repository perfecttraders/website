import { SITE } from '../data/siteData'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{SITE.name}</p>
          <p>Support: {SITE.supportEmail}</p>
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">X</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Telegram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
