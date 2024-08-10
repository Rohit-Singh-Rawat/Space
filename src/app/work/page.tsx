import CdBack from '@/components/shared/CdBack'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work',
  description: 'A Snapshot of my work and contributions.',
}

export default function WorkPage() {
  return (
    <section className="py-5 dark:text-zinc-200 md:mt-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">my work</h1>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-around gap-3 rounded-xl border-2 border-dashed border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-none hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none dark:border-white dark:bg-black dark:text-gray-400 dark:hover:shadow-[4px_4px_0px_white]"
        >
          View Resume
          <ChevronRight className="size-5 stroke-black dark:stroke-gray-400" />
        </Link>
      </div>
      <div className="space-y-5">
        {' '}
        <p>
          On a quest to explore cutting-edge tech and create captivating web
          animations, while fueling my passion for learning and growth.
        </p>
        <p>Here &apos;s a snapshot of my journey so far.</p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="space-y-8">
        <div className="space-y-2">
          <Link
            href={'https://leadlly.in'}
            target="_blank"
            className="group flex items-center justify-start gap-3 overflow-hidden"
          >
            <h2 className="text-2xl font-semibold">Leadlly .</h2>

            <div className="relative size-5 -translate-x-4 -translate-y-1 overflow-hidden">
              <ArrowUpRight className="size-5 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-5 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Full Stack Developer | April &apos;24 - Present
          </p>
        </div>

        <p className="leading-relaxed">
          Leadlly is an open-source platform for self-study and mentorship in
          educational settings. My role as a Full Stack Developer has allowed me
          to contribute in meaningful ways:
        </p>
        <ul className="list-inside list-disc space-y-4 leading-relaxed">
          <li>
            Developed a visually captivating landing page that effectively
            communicates the platform&apos;s mission and engages users.
          </li>
          <li>
            Implemented student-centric services, including:
            <ul className="ml-6 list-inside list-disc">
              <li>Error book for tracking mistakes.</li>
              <li>Interactive quizzes to reinforce learning.</li>
              <li>Planner to help students organize their studies.</li>
            </ul>
          </li>
        </ul>
        <p className="mt-6 leading-relaxed">
          This project has also been a significant learning journey. I honed my
          skills in Figma, Framer Motion, and Next.js, going beyond
          surface-level understanding to master industry standards and best
          practices.
        </p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <p className="mt-6 leading-relaxed">
        I&apos;m constantly learning and experimenting with new technologies.
        Stay tuned for more exciting projects and experiences coming soon...
      </p>

      <CdBack />
    </section>
  )
}
