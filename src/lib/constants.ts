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
    href: '/projects/fit-flow',
    imageSrc: '/images/project/Fit-flow.png',
    title: 'Fit Flow',
    videoSrc:
      'https://pasp3hha2jfsaiwz.public.blob.vercel-storage.com/fitflow-bxeIZzEYBBHqSqXUEa1ivzKo4Jq8Ck',
    year: '2024',
    tags: ['Fitness', 'Health'],
    timeline: 'January 2024 - June 2024',
    tagline: 'Revolutionizing fitness with personalized workouts.',
    sourceCodeHref: 'https://github.com/yourusername/fit-flow',
    liveDemoHref: 'https://fit-flow.demo.com',
  },
  {
    href: '/projects/github-timeline',
    imageSrc: '/images/project/github timeline.png',
    title: 'GitHub Timeline',
    year: '2023',
    tags: ['Tech', 'Productivity'],
    timeline: 'March 2023 - August 2023',
    tagline: 'Visualize your GitHub activity in a timeline.',
    sourceCodeHref: 'https://github.com/yourusername/github-timeline',
    liveDemoHref: 'https://github-timeline.demo.com',
  },
  {
    href: '/projects/hikari',
    imageSrc: '/images/project/hikari.png',
    title: 'Hikari',
    year: '2023',
    tags: ['Design', 'Innovation'],
    timeline: 'April 2023 - December 2023',
    tagline: 'Brightening up your digital experiences.',
    sourceCodeHref: 'https://github.com/yourusername/hikari',
    liveDemoHref: 'https://hikari.demo.com',
  },
  {
    href: '/projects/space',
    imageSrc: '/images/project/Space.png',
    title: 'Space',
    year: '2024',
    tags: ['Exploration', 'Education'],
    timeline: 'July 2024 - Ongoing',
    tagline: 'Exploring the mysteries of the universe.',
    sourceCodeHref: 'https://github.com/Rohit-Singh-Rawat/Space',
    liveDemoHref: 'https://space.demo.com',
  },
]
