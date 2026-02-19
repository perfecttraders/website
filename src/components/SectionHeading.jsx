function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accentBlue">Perfect Traders</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
