import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS, SITE } from '../data/siteData'

const activeClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm transition ${
    isActive
      ? 'bg-white/15 text-white'
      : 'text-slate-300 hover:bg-white/10 hover:text-white'
  }`

function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Logo />
        <nav className="flex flex-wrap items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} className={activeClass} to={link.path} end={link.path === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={SITE.platformUrl}
          className="rounded-full bg-gradient-to-r from-accentBlue to-accentRed px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
        >
          Start Trading
        </a>
      </div>
    </header>
  )
}

export default NavBar
