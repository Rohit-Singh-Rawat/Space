import ProjectCard from '@/components/Project/ProjectCard'
import CdBack from '@/components/shared/CdBack'
import { topProjects } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  return (
    <section className="pb-16 pt-8 md:mt-8 lg:mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-neu text-5xl font-semibold tracking-tight">
          Projects
        </h1>
        <h2 className="mt-3 text-center font-neu text-gray-400">
          Projects I&apos;ve crafted.
        </h2>
        <svg
          width="400"
          height="80"
          viewBox="0 0 200 40"
          className="-translate-y-12 translate-x-[-86px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#9400D3" stopOpacity="0" />
              <stop offset="100%" stopColor="#4B0082" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M10 20 L 80 20 L 100 30 H 196"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="my-8 font-neu text-3xl font-medium tracking-tight">
          Top Projects
        </h2>
        <div className="space-y-14">
          {topProjects.map((project, index) => (
            <ProjectCard
              key={index}
              delay={index * 0.2}
              href={project.href}
              imageSrc={project.imageSrc}
              videoSrc={project.videoSrc}
              title={project.title}
              tags={project.tags}
              timeline={project.timeline}
              tagline={project.tagline}
              liveDemoHref={project.liveDemoHref}
              sourceCodeHref={project.sourceCodeHref}
            />
          ))}
        </div>
      </div>{' '}
      <div>
        <h1 className="my-14 text-xl">
          View more on{' '}
          <Link
            href="https://github.com/Rohit-Singh-Rawat?tab=repositories"
            className="group inline-flex items-center justify-start bg-gradient-to-r from-green-200 via-green-400 to-purple-700 bg-clip-text font-neu text-transparent"
          >
            Github
            <ArrowRight className="ml-2 inline-block size-4 rounded-full border border-transparent stroke-black stroke-1 transition-all duration-300 ease-linear group-hover:-rotate-45 group-hover:border-slate-950 group-hover:stroke-[2px] dark:stroke-white dark:group-hover:border-slate-50" />
          </Link>
        </h1>
        <h1 className="mt-24 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-center font-neu text-4xl font-extrabold text-transparent opacity-30 md:text-7xl">
          Shipping More Soon
        </h1>
      </div>
      <CdBack />
    </section>
  )
}
export default page
