import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectCardProps {
  href: string
  imageSrc: string
  title: string
  tags: string[]
  timeline: string
  tagline: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  imageSrc,
  title,
  tags,
  timeline,
  tagline,
}) => {
  return (
    <div className="flex flex-col gap-20 sm:flex-row">
      {' '}
      <Link
        className="flex-1"
        href={href}
        rel="noopener noreferrer"
        aria-label={`${title} project link`}
      >
        <div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-gray-400/50 bg-[#e8e4e7]/70 p-1 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-[#121212] dark:shadow-[#121212]/50">
          <div className="flex gap-1 px-1 py-[2px]">
            <div className="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-zinc-300 dark:sm:bg-white/10"></div>
            <div className="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-zinc-300 dark:sm:bg-white/10"></div>
            <div className="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-zinc-300 dark:sm:bg-white/10"></div>
          </div>
          <div className="flex h-56 justify-center overflow-hidden rounded-lg">
            <Image
              width={1536}
              height={1000}
              alt={`${title} project image`}
              className="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
              aria-label={`${title} project image`}
              src={imageSrc}
            />
          </div>
        </div>
      </Link>{' '}
      <div className="flex-1 space-y-4 p-4">
        <h2 className="mb-2 text-xl font-semibold dark:text-white">{title}</h2>
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
      </div>
    </div>
  )
}

export default ProjectCard
