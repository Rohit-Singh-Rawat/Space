import Link from 'next/link'
import { Separator } from '../ui/separator'
import { ArrowUpRight } from 'lucide-react'

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-5 text-left">
        <p>
          Hi, I&apos;m Rohit Singh Rawat, an India-based Full-Stack developer,
          and I love crafting intuitive and dynamic{' '}
          <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            UIs
          </span>{' '}
          with Next.js.
        </p>
        <p>
          My expertise lies in developing responsive user interfaces for
          web-based applications, ensuring a secure and seamless user
          experience.
        </p>

        <p>
          I find it fun to browse the web and design animated components and
          websites with tools like Framer motion. At the moment, I&apos;m also
          delving into Web3 and backend technologies.
        </p>

        <div className="flex">
          A Snapshot of my
          <Link href={'/work'} className="group ml-1 flex">
            {' '}
            work exp .
            <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
              <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <Separator className="w-14 bg-[#888]/40" />
        </div>
        <p>
          Find me on twitter at{' '}
          <Link
            href={'https://x.com/Spacing_Whale'}
            className="wavvy underline-offset-2"
          >
            x.com
          </Link>{' '}
          or drop a{' '}
          <Link
            href={'mailto:rohitzrawat2003@gmail.com'}
            className="wavvy underline-offset-2"
          >
            email
          </Link>
        </p>
      </div>
    </section>
  )
}
