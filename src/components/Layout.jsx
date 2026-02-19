import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-[size:32px_32px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(44,139,255,0.2),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,59,98,0.2),transparent_40%)]" />
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
