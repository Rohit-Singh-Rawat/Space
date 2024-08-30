import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Shadcn } from '@/components/Icons/StackIcons/Shadcn'
import { Tailwind } from '@/components/Icons/StackIcons/tailwindcss'
import { Github } from '@/components/Icons/StackIcons/github'
import { FramerMotion } from '@/components/Icons/StackIcons/FramerMotion'
import Umami from '@/components/Icons/Umami'
import VercelLogoIcon from '@/components/Home/VercelIcon'
import MdxIcon from '@/components/Home/MdxIcon'

import React from 'react'
type NavItems = {
  name: string
  href: string
}[]
export const navItems: NavItems = [
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Playground', href: '/playground' },
]

interface IconData {
  Component: React.FC<{ className?: string }>
  href: string
  className: string
  label: string
}
export const iconData: IconData[] = [
  {
    Component: Nextjs,
    href: 'https://nextjs.org',
    className: 'size-12 dark:invert',
    label: 'Framework',
  },
  {
    Component: Tailwind,
    href: 'https://tailwindcss.com',
    className: 'size-12 grayscale invert dark:invert-0',
    label: 'Utility',
  },
  {
    Component: Shadcn,
    href: 'https://shadcn.dev',
    className: 'size-12',
    label: 'UI lib',
  },
  {
    Component: FramerMotion,
    href: 'https://www.framer.com/api/motion/',
    className: 'size-12',
    label: 'Animation',
  },
  {
    Component: MdxIcon,
    href: 'https://mdxjs.com',
    className: 'size-12',
    label: 'Markdown',
  },
  {
    Component: Umami,
    href: 'https://umami.is',
    className: 'size-12 dark:invert',
    label: 'Analytics',
  },
  {
    Component: Github,
    href: 'https://github.com',
    className: 'size-12 dark:invert',
    label: 'Version',
  },
  {
    Component: VercelLogoIcon,
    href: 'https://vercel.com',
    className: 'size-12',
    label: 'Deploy',
  },
]
export const inspirationWebsites = [
  { name: 'antfu.me', url: 'https://antfu.me/' },
  { name: 'beta.vimfn.in', url: 'https://beta.vimfn.in' },
  { name: 'honghong.me', url: 'https://honghong.me' },
  { name: 'leerob.io', url: 'https://leerob.io' },
  { name: 'manuarora.in', url: 'https://manuarora.in/' },
  { name: 'canvas.hrcd.fr', url: 'https://canvas.hrcd.fr/' },
  { name: 'marcbouchenoire.com', url: 'https://marcbouchenoire.com' },
  { name: 'magicui.design', url: 'https://magicui.design/' },
  { name: 'augen.pro', url: 'https://augen.pro/' },
  { name: 'ui.aceternity.com', url: 'https://ui.aceternity.com/' },
]
export const topProjects = [
  {
    href: '/projects/space',
    videoSrc: 'space-uecizlixlpcAH1cmch9kYp12JQ0ryA.mp4',
    imageSrc: '/images/project/Space.png',
    title: 'Space',
    tags: [
      'Portfolio',
      'Nextjs',
      'Framer motion',
      'Typescript',
      'Shadcn UI',
      'TailwindCSS',
    ],
    timeline: 'Aug 2024',
    tagline: 'My personal website and blog ',
    sourceCodeHref: 'https://github.com/Rohit-Singh-Rawat/Space',
    liveDemoHref: 'https://rohitsinghrawat.tech/',
  },
  {
    href: '/projects/fit-flow',
    imageSrc: '/images/project/Fit-flow.png',
    title: 'Fit Flow',
    videoSrc: 'fitflow-bxeIZzEYBBHqSqXUEa1ivzKo4Jq8Ck',
    tags: [
      'Nextjs',
      'Prisma',
      'PostgreSQL',
      'Tailwind',
      'TailwindCSS',
      'Shadcn UI',
    ],
    timeline: 'Jun 2024 - July 2024',
    tagline: 'StackOverFlow for Gym rat',
    sourceCodeHref: 'https://github.com/Rohit-Singh-Rawat/Fit-Flow',
    liveDemoHref: 'https://fit-flow-live.vercel.app/',
  },
  {
    href: '/projects/github-timeline',
    videoSrc: 'githubtimeline-PxWo4wrOFHi71ER3DdFrN1C8U2D0zE.mp4',
    imageSrc: '/images/project/github timeline.png',
    title: 'GitHub Timeline',
    tags: ['Nextjs', 'Framer motion', 'Typescript', 'GraphQl', 'TailwindCSS'],
    timeline: 'July 2024',
    tagline: 'Visualize your GitHub activity in a timeline.',
    sourceCodeHref: 'https://github.com/Rohit-Singh-Rawat/GitHub-Timeline',
    liveDemoHref: 'https://git-hub-timeline.vercel.app/',
  },
  {
    href: '/projects/hikari',
    videoSrc: 'hikari-ya72znzpdAcgxLkGN3GhrKbeUVLx1z.mp4',
    imageSrc: '/images/project/hikari.png',
    title: 'Hikari',
    tags: [
      'React',
      'Prisma',
      'PostgreSQL',
      'Tailwind',
      'TailwindCSS',
      'Cloudflare Workers',
    ],
    timeline: 'May 2024',
    tagline: 'Create, manage, and share blogs.',
    sourceCodeHref: 'https://github.com/Rohit-Singh-Rawat/Hikari',
    liveDemoHref: 'https://hikari-zeta.vercel.app/',
  },
]
