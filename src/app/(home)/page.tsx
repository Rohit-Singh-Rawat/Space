import { Intro } from '@/components/Home/Intro'
import Image from 'next/image'

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
        <div className="relative order-first shrink p-4 md:order-last md:p-4">
          <a
            href="https://twitter.com/Spacing_Whale "
            target="__blank"
            className="glitchy relative z-[5] block size-20 max-h-20 max-w-20 overflow-hidden rounded bg-white shadow-xl ring-1 ring-slate-900/5"
          >
            <Image
              src={'/images/avatar.jpg'}
              alt="avatar"
              height={80}
              className="shadow-[inset_-5px_-18px_38px_22px_#000000] grayscale"
              width={80}
            />
          </a>
          <div className="z-0">
            <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/40"></div>
            <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/40"></div>
            <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/40"></div>
            <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/40"></div>
            <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div className="-mb-px flex h-[2px] w-40 -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="ml-[-100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>

      <Intro />
      {/* <GridCards /> */}
    </section>
  )
}
export default page
