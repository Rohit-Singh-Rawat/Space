import PolaroidPhoto from '@/components/About/PolaroidPhoto'

import p1 from '../../../public/images/photo1.jpg'
import p2 from '../../../public/images/photo2.jpg'
import p3 from '../../../public/images/photo3.jpg'
const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <h1 className="text-4xl font-bold tracking-tight">about me</h1>
      <div className="flex items-center justify-between gap-2 py-20">
        <PolaroidPhoto altText="image" imageSrc={p1} rotation={-7} />
        <PolaroidPhoto altText="image" imageSrc={p2} rotation={5} />
        <PolaroidPhoto altText="image" imageSrc={p3} rotation={2} />
      </div>
      <div className="space-y-5">
        <p>
          Hey there! I’m Rohit Singh Rawat, a{' '}
          <span className="text-pink-500 underline">
            20-year-old Full-Stack developer
          </span>{' '}
          from India who thrives on crafting{' '}
          <span className="text-teal-500 underline">
            intuitive and dynamic UIs
          </span>
          , especially with{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 underline"
          >
            Next.js
          </a>
          .
        </p>
        <p>
          I began my tech journey at the end of 2022, and since then, I’ve
          developed a strong expertise in building{' '}
          <span className="text-orange-500 underline">
            responsive and secure web applications
          </span>{' '}
          that offer a seamless user experience. Along with my love for{' '}
          <span className="text-orange-500 underline">animation</span> and{' '}
          <span className="text-orange-500 underline">UI design</span>, I find{' '}
          <span className="text-orange-500 underline">
            full-stack development
          </span>{' '}
          incredibly fascinating.
        </p>
        <p>
          I’m especially intrigued by creating{' '}
          <span className="text-yellow-500 underline">scalable backends</span>{' '}
          and{' '}
          <span className="text-yellow-500 underline">robust applications</span>
          , which adds another layer of excitement to my work.
        </p>
        <p>
          Lately, I’m exploring backend technologies like{' '}
          <a
            href="https://redis.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
            Redis
          </a>{' '}
          and <span className="text-purple-500 underline">WebSockets</span>,
          with a growing curiosity for{' '}
          <span className="text-purple-500 underline">Web3</span> on the
          horizon.
        </p>
      </div>
    </section>
  )
}
export default page
