import { Marquee } from '../Marquee'
import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Html } from '@/components/Icons/StackIcons/Html'
import { Css } from '@/components/Icons/StackIcons/css'
import { Docker } from '@/components/Icons/StackIcons/docker'
import { Express } from '@/components/Icons/StackIcons/express'
import { Figma } from '@/components/Icons/StackIcons/figma'
import { FramerMotion } from '@/components/Icons/StackIcons/FramerMotion'
import { Git } from '@/components/Icons/StackIcons/git'
import { Github } from '@/components/Icons/StackIcons/github'
import { GithubActions } from '@/components/Icons/StackIcons/githubactions'
import { Graphql } from '@/components/Icons/StackIcons/graphql'
import { Java } from '@/components/Icons/StackIcons/java'
import { JS } from '@/components/Icons/StackIcons/javascript'
import { Mongodb } from '@/components/Icons/StackIcons/mongodb'
import { Postgresql } from '@/components/Icons/StackIcons/postgresql'
import { Postman } from '@/components/Icons/StackIcons/postman'
import { Prisma } from '@/components/Icons/StackIcons/prisma'
import { ReactIcon } from '@/components/Icons/StackIcons/react'
import { Redis } from '@/components/Icons/StackIcons/redis'
import { Sass } from '@/components/Icons/StackIcons/sass'
import { Shadcn } from '@/components/Icons/StackIcons/Shadcn'
import { Sql } from '@/components/Icons/StackIcons/sql'
import { Tailwind } from '@/components/Icons/StackIcons/tailwindcss'
import { Typescript } from '@/components/Icons/StackIcons/typescript'
import { Vite } from '@/components/Icons/StackIcons/vite'
import { VsCode } from '@/components/Icons/StackIcons/VS'
import { Webpack } from '@/components/Icons/StackIcons/webpack'
import { WebSocket } from '@/components/Icons/StackIcons/Websocket'
import { Cloudflare } from '@/components/Icons/StackIcons/Cloudflare'
import React from 'react'
import { NodejsIcon } from '@/components/Icons/StackIcons/nodejsIcon'
import Stack from '@/components/Icons/Stack'
import BentoCard from './BentoCard'

const frontendTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Html,
  Css,
  JS,
  Typescript,
  ReactIcon,
  Nextjs,
  Tailwind,
  Sass,
  FramerMotion,
  Figma,
  Sql,
  Shadcn,
  Vite,
  Webpack,
]

const backendAndTools: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  NodejsIcon,
  Express,
  Docker,
  Prisma,
  Postgresql,
  Mongodb,
  Redis,
  Graphql,
  Postman,
  VsCode,
  Git,
  Github,
  GithubActions,
  WebSocket,
  Cloudflare,
  Java,
]

const StacksCard = () => {
  return (
    <BentoCard className="group/stack col-span-4 row-span-2 h-56 p-4 lg:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Stack className="size-4" />
        <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
          Stacks
        </h2>
      </div>
      <Marquee gap="20px" className="py-4" fade pauseOnHover>
        {frontendTech.map((TechComponent, index) => (
          <TechComponent
            key={index}
            className="size-10 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
          />
        ))}
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        {backendAndTools.map((TechComponent, index) => (
          <TechComponent
            key={index}
            className="size-10 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
          />
        ))}
      </Marquee>
    </BentoCard>
  )
}

export default StacksCard
