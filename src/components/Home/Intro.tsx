import { Separator } from '../ui/separator'

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="flex flex-col items-center space-y-5">
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

        <Separator className="w-14 bg-[#888]/40" />
        <p>
          I find it fun to browse the web and design animated components and
          websites with tools like Framer motion. At the moment, I&apos;m also
          delving into Web3 and backend technologies.
        </p>
        <p>Find my work</p>
      </div>
    </section>
  )
}
