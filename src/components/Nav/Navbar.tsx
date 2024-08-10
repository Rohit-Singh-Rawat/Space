'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from '../shared/ThemeSwitch'
import MobileNavBar from '../shared/MobileNavbar'
import HamburgerMenu from '../shared/HamburgerMenu'

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Playground', href: '/playground' },
  { name: 'Contact', href: '/contact' },
]

const NavBar = () => {
  const path = usePathname()

  return (
    <div className="flex w-full flex-col items-end justify-between p-4 md:px-10">
      <div className="flex flex-row-reverse items-center justify-between md:flex-row">
        <nav className="hidden gap-1 px-1 py-5 md:flex">
          {navItems.map(({ name, href }) => (
            <div key={name + href}>
              <Link
                className={`relative w-fit overflow-hidden rounded-full px-3 py-2 opacity-50 transition-all ${
                  path === href ? '' : 'hover:opacity-100'
                }`}
                href={href}
              >
                <span className="relative z-10">{name}</span>
              </Link>
            </div>
          ))}
        </nav>
        <HamburgerMenu />

        <ThemeSwitch />
      </div>
      <MobileNavBar />
    </div>
  )
}

export default NavBar
