import { skillCategories } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="skills"
          title="Technical skills, organized by category"
          description="Grouped by area rather than ranked — some of these are fundamentals in progress, not mastery claims."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-mono text-sm text-signal-teal mb-3">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-paper-300 border border-ink-border rounded-md px-3 py-1.5 bg-ink-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
