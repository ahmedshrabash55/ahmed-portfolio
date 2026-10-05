import { useEffect } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-ink-950/80 backdrop-blur-sm px-0 sm:px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-xl max-h-[85vh] overflow-y-auto rounded-t-xl sm:rounded-xl border border-ink-border bg-ink-800 p-6 md:p-8"
      >
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full rounded-md border border-ink-border mb-5 object-cover max-h-56"
          />
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-signal-teal">{project.category}</span>
            <h3 className="mt-1 font-display text-2xl font-semibold text-paper-100">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close details"
            className="shrink-0 w-9 h-9 rounded-md border border-ink-border flex items-center justify-center text-paper-500 hover:text-paper-100 hover:border-paper-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-4 text-paper-300 text-sm leading-relaxed">{project.description}</p>

        <div className="mt-6">
          <h4 className="font-mono text-xs text-paper-500 mb-2">tools</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="text-xs text-paper-300 border border-ink-border rounded px-2.5 py-1">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-mono text-xs text-paper-500 mb-2">skills demonstrated</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="text-xs text-signal-teal border border-signal-teal/30 bg-signal-teal/5 rounded px-2.5 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-mono text-xs text-paper-500 mb-3">what I did</h4>
          <ul className="space-y-2.5">
            {project.whatIDid.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-paper-300">
                <CheckCircle2 size={15} className="text-signal-teal shrink-0 mt-0.5" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-md border border-ink-border bg-ink-900/60 p-4">
          <h4 className="font-mono text-xs text-paper-500 mb-1.5">outcome / learning</h4>
          <p className="text-sm text-paper-300 leading-relaxed">{project.outcome}</p>
        </div>

        {!project.link && (
          <p className="mt-5 text-xs text-paper-500 italic">
            Lab-based project — no public repository or live demo.
          </p>
        )}
      </div>
    </div>
  )
}
