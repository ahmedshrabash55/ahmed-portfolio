import { ArrowRight, Linkedin, MapPin, Download } from 'lucide-react'
import { profile, heroStatement } from '../data/content'

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { text: 'ahmed_shrabash — cybersecurity student' },
  { prompt: true, text: 'cat focus.txt' },
  { text: 'web · mobile · network · active directory' },
  { prompt: true, text: 'status --current' },
  { text: 'training @ DEPI — penetration tester', accent: true },
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-panel [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />

      <div className="relative max-w-content mx-auto px-6 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center">
        <div>
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-ink-border ring-1 ring-signal-teal/30 mb-6"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-800/60 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-teal" />
            <span className="text-xs text-paper-500 font-mono">available for opportunities</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-paper-100 text-balance">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-paper-300 font-medium">{profile.title}</p>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
            {profile.focus.map((item, i) => (
              <li key={item} className="flex items-center text-sm text-paper-500">
                {item}
                {i < profile.focus.length - 1 && <span className="ml-3 text-ink-600">/</span>}
              </li>
            ))}
          </ul>

          <p className="mt-7 text-base md:text-lg text-paper-300 leading-relaxed max-w-xl">
            {heroStatement}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-signal-teal text-ink-950 font-medium px-5 py-3 text-sm hover:bg-signal-teal/90 transition-colors"
            >
              View my projects
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-5 py-3 text-sm text-paper-100 hover:border-paper-500 transition-colors"
            >
              Contact me
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-5 py-3 text-sm text-paper-100 hover:border-paper-500 transition-colors"
            >
              <Download size={16} strokeWidth={2} />
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper-500 hover:text-signal-teal transition-colors px-2 py-3"
            >
              <Linkedin size={16} strokeWidth={2} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-paper-500">
            <MapPin size={14} strokeWidth={2} />
            {profile.location}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-xl border border-ink-border bg-ink-800/70 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="scan-sweep" />
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-border bg-ink-700/50">
              <span className="w-2.5 h-2.5 rounded-full bg-ink-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink-500" />
              <span className="ml-3 text-xs text-paper-500 font-mono">session — ahmed@sec-lab</span>
            </div>
            <div className="p-5 md:p-6 font-mono text-[13px] md:text-sm leading-7">
              {terminalLines.map((line, idx) => (
                <div key={idx} className={line.prompt ? 'text-paper-100' : 'text-paper-500 pl-4'}>
                  {line.prompt && <span className="text-signal-teal mr-2">$</span>}
                  <span className={line.accent ? 'text-signal-teal' : ''}>{line.text}</span>
                  {idx === terminalLines.length - 1 && <span className="caret" />}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full bg-signal-indigo/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
