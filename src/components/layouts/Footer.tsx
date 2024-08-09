import { Github } from '../Icons/StackIcons/github'
import NowPlaying from '../shared/NowPlaying'
import { Separator } from '../ui/separator'
// import { execa } from 'execa'

// async function getLatestCommit() {
//   const { stdout } = await execa('git', ['rev-parse', '--short', 'HEAD'])

//   return stdout
// }

async function Footer() {
  // const commit = await getLatestCommit()
  const year = String(new Date().getFullYear())

  return (
    <footer className="container mx-auto flex max-w-3xl flex-col py-5 md:px-16">
      <NowPlaying />
      <Separator className="h-[0.5px] bg-emerald-900/60" />
      <div className="flex items-center py-3 text-sm font-semibold text-[#4B4B4B]">
        <time className="hidden sm:inline" dateTime={String(year)}>
          {year}{' '}
        </time>{' '}
        ©<p>Rohit Singh Rawat</p>
        <a
          className="link ml-auto inline-flex items-center gap-1.5"
          href="https://github.com/Rohit-Singh-Rawat/Space"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-5 dark:invert" />
          <span>
            <span className="bg-gradient-to-l from-gray-600 to-gray-300 bg-clip-text text-transparent">
              Space
            </span>
            {/* <span className="text-gray-350 dark:text-gray-450 hidden underline decoration-2 underline-offset-2 sm:inline">
              #{commit}
            </span> */}
          </span>
        </a>
      </div>
    </footer>
  )
}
export default Footer
