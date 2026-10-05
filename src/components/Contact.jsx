import { Mail, Linkedin, MapPin, Phone, ArrowRight } from 'lucide-react'
import { contact, profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="relative rounded-2xl border border-ink-border bg-ink-800/60 overflow-hidden px-6 py-14 md:px-16 md:py-20 text-center">
          <div className="absolute inset-0 bg-grid-panel opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_0%,transparent_75%)]" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-[2.5rem] font-semibold text-paper-100 leading-tight text-balance">
              {contact.heading}
            </h2>
            <p className="mt-4 text-paper-300 leading-relaxed">{contact.sub}</p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-signal-teal text-ink-950 font-medium px-5 py-3 text-sm hover:bg-signal-teal/90 transition-colors"
              >
                <Mail size={16} strokeWidth={2} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-border px-5 py-3 text-sm text-paper-100 hover:border-signal-teal/50 transition-colors"
              >
                <Linkedin size={16} strokeWidth={2} />
                Connect on LinkedIn
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-paper-500">
              <span className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={2} />
                {profile.location}
              </span>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-signal-teal transition-colors">
                <Phone size={14} strokeWidth={2} />
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
