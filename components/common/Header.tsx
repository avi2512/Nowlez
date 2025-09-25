import React from 'react'
import Link from 'next/link'

type NavLink = { label: string; href: string }

export default function Header({ links }: { links: NavLink[] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold">Nowlez.Ai</Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-black/70 hover:text-black">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-md border border-black/10 p-2">
              <span className="block h-0.5 w-5 bg-black" />
              <span className="mt-1 block h-0.5 w-5 bg-black" />
              <span className="mt-1 block h-0.5 w-5 bg-black" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="grid gap-2 py-2 text-sm">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-md px-2 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}


