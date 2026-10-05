import { Award, Plus } from 'lucide-react'
import { certifications } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="certifications"
          title="Certifications & continued learning"
          description="This section is ready for certificates as they're earned — nothing is listed here until it's real."
        />

        {certifications.length === 0 ? (
          <div className="rounded-lg border border-dashed border-ink-border p-10 text-center max-w-xl">
            <div className="w-11 h-11 rounded-md bg-ink-800 border border-ink-border flex items-center justify-center text-paper-500 mx-auto">
              <Plus size={18} strokeWidth={2} />
            </div>
            <p className="mt-4 text-sm text-paper-500 leading-relaxed">
              No certifications added yet. Add entries to{' '}
              <code className="font-mono text-xs text-paper-300 bg-ink-800 border border-ink-border rounded px-1.5 py-0.5">
                src/data/content.js
              </code>{' '}
              — name, organization, date, and a verification link — and they'll appear here as cards automatically.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-lg border border-ink-border bg-ink-800/60 overflow-hidden">
                {cert.image && (
                  <img src={cert.image} alt={cert.name} className="w-full h-40 object-cover border-b border-ink-border" />
                )}
                <div className="p-5">
                <div className="w-9 h-9 rounded-md bg-signal-amber/10 flex items-center justify-center text-signal-amber mb-3">
                  <Award size={16} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-base font-medium text-paper-100">{cert.name}</h3>
                <p className="mt-1 text-sm text-paper-500">{cert.org} · {cert.date}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-signal-teal hover:underline">
                    Verify
                  </a>
                )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
