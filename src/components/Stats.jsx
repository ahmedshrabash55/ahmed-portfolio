import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="border-y border-ink-border bg-ink-800/40">
      <div className="max-w-content mx-auto px-6 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l-2 border-signal-teal/40 pl-4">
            <p className="font-display text-base md:text-lg text-paper-100 font-medium leading-snug">
              {stat.label}
            </p>
            <p className="mt-1 text-sm text-paper-500">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
