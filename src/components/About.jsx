import { Terminal } from 'lucide-react'
import { about } from '../data/content'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading kicker="about" title="From coursework to controlled labs" />

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-paper-300 leading-relaxed text-[15px] md:text-base max-w-2xl">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-lg border border-ink-border bg-ink-800/60 p-6 h-fit">
            <div className="flex items-center gap-2 text-signal-teal mb-4">
              <Terminal size={16} strokeWidth={2} />
              <span className="font-mono text-sm">currently learning</span>
            </div>
            <ul className="space-y-3">
              {about.currentlyLearning.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-paper-300">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-signal-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
