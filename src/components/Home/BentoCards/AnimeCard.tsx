'use client'

import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'
import BentoCard from './BentoCard'
import { animeImageAtom } from '@/lib/atoms'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const AnimeCard = () => {
  const imageSrc = useRecoilValue(animeImageAtom)

  return (
    <BentoCard className="relative col-span-2 row-span-1 h-56 p-0 transition-all duration-500 hover:scale-95 xs:col-span-1 xs:row-span-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={imageSrc}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
          }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
          className="group absolute left-0 top-0 size-full"
        >
          <Image
            alt="anime"
            width={1079}
            placeholder="blur"
            blurDataURL={imageSrc}
            height={2408}
            src={imageSrc}
            className="size-full object-cover object-center transition-all duration-500 group-hover:scale-[1.35] xs:object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <Link
        href={'/playground'}
        className="absolute right-2 top-2 rounded-full border border-white bg-black p-1 opacity-55 transition-all duration-300 ease-in-out hover:scale-90 hover:opacity-100"
      >
        <ArrowUpRight className="size-5 text-white" />
      </Link>
    </BentoCard>
  )
}

export default AnimeCard
