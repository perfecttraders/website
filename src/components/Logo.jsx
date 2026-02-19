const Logo = () => (
  <div className="flex items-center gap-2 font-semibold tracking-wide">
    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accentBlue to-accentRed p-[1px] shadow-glow">
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-background text-sm font-bold">PT</div>
    </div>
    <div>
      <p className="leading-tight text-white">Perfect Traders</p>
      <p className="text-xs text-slate-400">Forex Brokerage</p>
    </div>
  </div>
)

export default Logo
