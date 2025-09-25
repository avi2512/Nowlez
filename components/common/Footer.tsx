type LinkItem = { label: string; href: string }
type LinkGroup = { title: string; links: LinkItem[] }

export default function Footer({ groups }: { groups: LinkGroup[] }) {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-3 text-sm font-semibold">{g.title}</div>
              <ul className="space-y-2 text-sm text-black/70">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-black hover:underline">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-black/60">
          <div>© {new Date().getFullYear()} Nowlez.Ai</div>
          <div className="flex gap-4">
            <a className="hover:text-black" href="#">Twitter</a>
            <a className="hover:text-black" href="#">LinkedIn</a>
            <a className="hover:text-black" href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


