import { Globe, Smartphone, Network, KeyRound } from 'lucide-react'
import { expertiseAreas } from '../data/content'
import SectionHeading from './SectionHeading'

const icons = [Globe, Smartphone, Network, KeyRound]

export default function Expertise() {
  return (
    <section className="py-20 md:py-28 bg-ink-800/30 border-y border-ink-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="focus areas"
          title="Where I'm building depth"
          description="Four areas I'm actively developing through structured, hands-on training."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {expertiseAreas.map((area, i) => {
            const Icon = icons[i]
            return (
              <div
                key={area.title}
                className="rounded-lg border border-ink-border bg-ink-900/60 p-6 hover:border-signal-teal/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-signal-teal/10 flex items-center justify-center text-signal-teal mb-4">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-medium text-paper-100">{area.title}</h3>
                <p className="mt-2 text-sm text-paper-500 leading-relaxed">{area.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-paper-300 border border-ink-border rounded px-2.5 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
