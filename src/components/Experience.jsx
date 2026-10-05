import { timeline } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading kicker="experience" title="Training timeline" />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-ink-border" />

          <div className="space-y-10">
            {timeline.map((entry) => (
              <div key={entry.org + entry.period} className="relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-signal-teal bg-ink-900" />
                <p className="font-mono text-xs text-signal-teal">{entry.period}</p>
                <h3 className="mt-1.5 font-display text-lg font-medium text-paper-100">{entry.role}</h3>
                <p className="text-sm text-paper-300">{entry.org} · {entry.location}</p>
                <p className="mt-2 text-sm text-paper-500 leading-relaxed max-w-xl">{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
