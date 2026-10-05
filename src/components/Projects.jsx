import { useState } from 'react'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { projects } from '../data/content'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="py-20 md:py-28 bg-ink-800/30 border-y border-ink-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="projects"
          title="Practical experience, lab by lab"
          description="Case studies from hands-on training — each one built in a controlled environment, not a live engagement."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-lg border border-ink-border bg-ink-900/60 overflow-hidden hover:border-signal-teal/30 transition-colors flex flex-col"
            >
              {project.image ? (
                <div className="h-36 border-b border-ink-border overflow-hidden bg-ink-800">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-36 border-b border-ink-border bg-ink-800/60 flex flex-col items-center justify-center gap-2 text-paper-500">
                  <ImageIcon size={22} strokeWidth={1.5} />
                  <span className="text-xs font-mono">screenshot placeholder</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-mono text-signal-teal">{project.category}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-paper-100">{project.title}</h3>
                <p className="mt-2 text-sm text-paper-500 leading-relaxed flex-1">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li key={tool} className="text-xs text-paper-300 border border-ink-border rounded px-2.5 py-1">
                      {tool}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveProject(project)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-signal-teal hover:gap-2.5 transition-all self-start"
                >
                  View details
                  <ArrowUpRight size={15} strokeWidth={2} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
