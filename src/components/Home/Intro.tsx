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

        <p>
          A Snapshot of my work exp{' '}
          <Link href={'/work'}>
            .
            <ArrowUpRight className="inline-block size-4 -translate-x-1 -translate-y-1" />
          </Link>
        </p>
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
