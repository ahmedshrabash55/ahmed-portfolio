import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink-border py-8">
      <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-paper-500">
        <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
        <p className="font-mono text-xs">status: learning, testing, building.</p>
      </div>
    </footer>
  )
}
