import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { Github } from '../Icons/StackIcons/github'
import { ArrowRight } from 'lucide-react'
import BlurFade from '../ui/BlurFade'
import VideoComponent from '../shared/VideoComponent'

interface ProjectCardProps {
  href: string
  imageSrc: string
  videoSrc?: string
  title: string
  tags: string[]
  timeline: string
  tagline: string
  delay: number
  sourceCodeHref: string
  liveDemoHref: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  imageSrc,
  videoSrc,
  title,
  tags,
  timeline,
  delay,
  tagline,
  sourceCodeHref,
  liveDemoHref,
}) => {
  return (
    <BlurFade delay={delay}>
      <div className="flex flex-col gap-10 sm:flex-row">
        <Link
          className="flex-1"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} project link`}
        >
          <div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-gray-400/50 bg-[#e8e4e7]/70 p-1 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-[#121212] dark:shadow-[#121212]/50">
            <div className="flex items-center justify-start">
              <div className="flex gap-1 px-1 py-[2px]">
                <div className="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-zinc-300 dark:sm:bg-white/10"></div>
                <div className="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-zinc-300 dark:sm:bg-white/10"></div>
                <div className="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-zinc-300 dark:sm:bg-white/10"></div>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="w-36 -translate-x-3 overflow-hidden truncate rounded bg-[#cfccce] text-center text-[8px] text-[#707070] backdrop-blur-3xl dark:bg-[#1b1b1b]">
                  {title}
                </div>
              </div>
            </div>

            <div className="flex h-56 justify-center overflow-hidden rounded-lg">
              {videoSrc ? (
                <Suspense
                  fallback={
                    <Image
                      width={1536}
                      height={1000}
                      alt={`${title} project image`}
                      className="size-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
                      aria-label={`${title} project image`}
                      src={imageSrc}
                    />
                  }
                >
                  <VideoComponent fileName={videoSrc} title={title} />
                </Suspense>
              ) : (
                <Image
                  width={1536}
                  height={1000}
                  alt={`${title} project image`}
                  className="size-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
                  aria-label={`${title} project image`}
                  src={imageSrc}
                />
              )}
            </div>
          </div>
        </Link>
        <div className="flex-1 space-y-3 p-4">
          <h2 className="mb-2 text-xl font-semibold dark:text-white">
            {title}
          </h2>
          <p className="mb-2 text-xs text-gray-800 dark:text-gray-50">
            {timeline}
          </p>
          <p className="mb-4 text-xs dark:text-slate-300">{tagline}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                className="rounded-lg bg-[#EBEBEB]/60 p-2 py-1 text-xs font-medium text-black before:mr-2 before:h-[90%] before:w-1 before:-translate-x-1 before:rounded-xl before:bg-zinc-800/90 before:text-transparent before:content-['f'] dark:bg-zinc-900/90 dark:text-white dark:before:bg-white"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Link
              href={sourceCodeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code link`}
              className="flex items-center justify-around gap-2 rounded-md bg-black/85 px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-black"
            >
              <Github className="inline-block size-4 invert dark:invert-0" />
              Source Code
            </Link>
            <Link
              href={liveDemoHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo link`}
              className="group flex items-center justify-around gap-2 rounded-md bg-black/85 px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-black"
            >
              Live Demo
              <ArrowRight className="size-4 rounded-full border border-transparent stroke-1 transition-all duration-300 ease-linear group-hover:-rotate-45 group-hover:border-slate-50 group-hover:stroke-[2px] dark:group-hover:border-slate-950" />
            </Link>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

export default ProjectCard
