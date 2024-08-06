import AvatarHairpin from '@/components/Home/AvatarHairpin'
import Bento from '@/components/Home/Bento'
import { Intro } from '@/components/Home/Intro'

const page = () => {
  return (
    <section className="px-16 pb-16 pt-8 md:mt-8 lg:mt-10">
      <div className="flex items-center justify-between">
        {' '}
        <div>
          {' '}
          <h1 className="mb-1 mt-0 font-neu text-3xl font-semibold dark:text-white">
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
