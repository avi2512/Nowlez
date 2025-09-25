import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nowlez.Ai – Your AI Legal Companion',
  description: 'Nowlez.Ai simplifies legal research, drafting, and analysis for lawyers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


