import PolaroidPhoto from '@/components/About/PolaroidPhoto'

import p1 from '@/../../public/images/photo1.jpg'
import p2 from '../../../public/images/photo2.jpg'
import p3 from '../../../public/images/photo3.jpg'
import Link from 'next/link'
import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Shadcn } from '@/components/Icons/StackIcons/Shadcn'
import { VercelLogoIcon } from '@radix-ui/react-icons'
import { Tailwind } from '@/components/Icons/StackIcons/tailwindcss'
import { Github } from '@/components/Icons/StackIcons/github'
import { FramerMotion } from '@/components/Icons/StackIcons/FramerMotion'
const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <h1 className="text-4xl font-bold tracking-tight">about me</h1>
      <div className="flex items-center justify-between gap-2 py-20">
        <PolaroidPhoto
          altText="image"
          imageSrc={p1}
          rotation={-7}
          text="My First Capture"
        />
        <PolaroidPhoto
          altText="image"
          imageSrc={p2}
          rotation={5}
          text="Solitary Wanderer"
        />
        <PolaroidPhoto
          altText="image"
          imageSrc={p3}
          rotation={2}
          text="Peace"
        />
      </div>
      <div className="group space-y-5 leading-relaxed">
        <p>
          Hey there! I’m Rohit Singh Rawat, a 20-year-old Full-Stack developer
          from India who thrives on crafting intuitive and dynamic{' '}
          <span className="text-teal-500">UIs</span>, especially with{' '}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="wavvy under underline-offset-4"
          >
            Next.js
          </Link>
          .
        </p>
        <p>
          I began my tech journey at the end of 2022, and since then, I’ve
          developed a strong expertise in building responsive and secure web
          applications that offer a seamless user experience. Along with my love
          for animation and UI design, I find full-stack development incredibly
          fascinating.
        </p>
        <p>
          I’m especially intrigued by creating scalable backends and robust
          applications , which adds another layer of excitement to my work.
        </p>
        <p>
          Lately, I’m exploring backend technologies like{' '}
          <Link
            href="https://redis.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400"
          >
            Redis
          </Link>{' '}
          and <span className="text-gray-700">WebSockets</span>, with a growing
          curiosity for <span className="underline">Web3</span> on the horizon.
        </p>
      </div>
      <div>
        <h1 className="mt-20 text-4xl font-bold tracking-tight">
          About this site
        </h1>
        <p className="my-7 text-lg"> Curious about this site? It features:</p>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tech stack</h1>

          <div className="grid grid-cols-2">
            <Nextjs className="size-12" />
            <Tailwind className="size-12" />
            <Shadcn className="size-12" />
            <FramerMotion />
            <Github />

            <VercelLogoIcon className="size-12" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default page
