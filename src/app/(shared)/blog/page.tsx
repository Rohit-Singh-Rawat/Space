import CdBack from '@/components/shared/CdBack'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <section className="space-y-2 py-5 md:mt-8">
      {' '}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">read my blogs</h1>
      </div>{' '}
      <p>
        I’ll be cooking about topics like Next.js, animated components, and my
        learning journey.
      </p>
      <p>
        While I craft these tales, let’s connect—follow me on{' '}
        <Link
          href={'https://x.com/Spacing_Whale'}
          className="wavvy underline-offset-2"
        >
          x.com
        </Link>{' '}
        for sneak peeks and insights!
      </p>
      <div className="flex items-center justify-center pt-60">
        {' '}
        <div className="absolute flex size-80 items-center justify-center rounded-full bg-gradient-to-t from-white from-30% to-green-500/80 shadow-[inset_-1px_-90px_100px_30px_#fff] dark:from-black dark:to-green-500/60 dark:shadow-[inset_-1px_-90px_100px_30px_#000]"></div>
        <h1 className="z-10 text-center font-neu text-7xl tracking-widest">
          COMING SOON
        </h1>
      </div>
      <CdBack />
    </section>
  )
}

export default Blog
