import AvatarHairpin from '@/components/Home/AvatarHairpin'
import Bento from '@/components/Home/Bento'
import { Intro } from '@/components/Home/Intro'

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between">
        {' '}
        <div>
          {' '}
          <h1 className="mb-1 mt-0 text-3xl font-semibold dark:text-white">
            Rohit Singh Rawat
          </h1>
          <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
            Full Stack Engineer
          </div>
        </div>{' '}
        <AvatarHairpin />
      </div>

      <Intro />

      <Bento />
    </section>
  )
}
export default page
