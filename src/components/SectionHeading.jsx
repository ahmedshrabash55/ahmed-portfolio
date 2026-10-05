export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {kicker && (
        <p className="font-mono text-sm text-signal-teal mb-3 tracking-tight">{kicker}</p>
      )}
      <h2 className="font-display text-3xl md:text-[2.5rem] font-semibold text-paper-100 leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-paper-500 text-base leading-relaxed">{description}</p>
      )}
    </div>
  )
}
