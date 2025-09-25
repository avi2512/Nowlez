import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { navLinks } from '@/data/nav'
import { footerGroups } from '@/data/footer'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <Header links={navLinks} />
      <main>{children}</main>
      <Footer groups={footerGroups} />
    </div>
  )
}


