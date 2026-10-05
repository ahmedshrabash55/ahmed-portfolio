import { CheckCircle2 } from 'lucide-react'
import { usp } from '../data/content'

export default function USP() {
  return (
    <section className="py-20 md:py-28 bg-ink-800/30 border-y border-ink-border">
      <div className="max-w-content mx-auto px-6 md:px-8 grid md:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <p className="font-mono text-sm text-signal-teal mb-3">why work with me</p>
          <h2 className="font-display text-3xl md:text-[2.25rem] font-semibold text-paper-100 leading-tight text-balance">
            {usp.heading}
          </h2>
          <p className="mt-5 text-paper-300 leading-relaxed text-[15px] md:text-base">{usp.statement}</p>
        </div>

        <ul className="space-y-4">
          {usp.points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-lg border border-ink-border bg-ink-900/60 p-4">
              <CheckCircle2 size={18} className="text-signal-teal shrink-0 mt-0.5" strokeWidth={1.75} />
              <span className="text-sm text-paper-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
