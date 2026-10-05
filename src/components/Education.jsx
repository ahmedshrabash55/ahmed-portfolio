import { education } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-ink-800/30 border-y border-ink-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading kicker="education" title="Academic background" />

        <div className="rounded-lg border border-ink-border bg-ink-900/60 p-7 md:p-8 max-w-2xl flex items-start gap-5">
          <div className="w-11 h-11 rounded-md bg-ink-800 border border-ink-border flex items-center justify-center shrink-0 overflow-hidden">
            <img src={education.logo} alt={`${education.institution} logo`} className="w-full h-full object-contain p-1" />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium text-paper-100">{education.degree}</h3>
            <p className="mt-1 text-sm text-paper-300">{education.institution}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-paper-500">
              <span>{education.period}</span>
              <span className="text-ink-600">·</span>
              <span>{education.grade}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
