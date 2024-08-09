'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { motion } from 'framer-motion'
import ThemeSwitch from '../shared/ThemeSwitch'
import Hamburger from '../Icons/Hamburger'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type NavItems = {
  name: string
  href: string
}[]

const navItems: NavItems = [
  { name: 'work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Playground', href: '/playground' },
  { name: 'Contact', href: '/contact' },
]

const NavBar = () => {
  const path = usePathname()

  return (
    <div className="flex flex-row-reverse items-center md:flex-row">
      <nav className="hidden gap-1 px-1 py-5 md:flex">
        {navItems.map(({ name, href }) => (
          <div key={name + href}>
            <Link
              className={
                'rounded-ful relative w-fit overflow-hidden px-3 py-2 opacity-50 transition-all ' +
                (path == href ? '' : 'hover:opacity-100')
              }
              href={href}
            >
              <span className="relative z-10">{name}</span>
            </Link>
          </div>
        ))}
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-transparent outline-none md:hidden">
            <Hamburger className="size-8" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-6 dark:border-emerald-900/50 dark:bg-black">
          {navItems.map(({ name, href }) => (
            <DropdownMenuItem
              key={name + href}
              asChild
              className="bg-transparent hover:bg-transparent active:bg-transparent"
            >
              <Link
                className={
                  'rounded-ful relative w-fit overflow-hidden px-3 py-2 opacity-50 transition-all ' +
                  (path == href ? '' : 'hover:opacity-100')
                }
                href={href}
              >
                <span className="relative z-10">{name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeSwitch />
    </div>
  )
}

export default NavBar
