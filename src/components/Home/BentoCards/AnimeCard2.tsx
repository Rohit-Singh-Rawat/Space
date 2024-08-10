'use client'

import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import BentoCard from './BentoCard'
import { animeImageAtom } from '@/lib/atoms'
import arima from '../../../../public/images/arima.jpg'

const AnimeCard2 = () => {
  const setImageSrc = useSetRecoilState(animeImageAtom)

  const handleClick = () => {
    setImageSrc('/images/Kaori2.jpg')
  }

  return (
    <BentoCard className="relative col-span-2 row-span-1 h-56 p-0 transition-all duration-500 hover:scale-95 xs:col-span-1 xs:row-span-2">
      <button className="group size-full" onClick={handleClick}>
        <Image
          alt="anime"
          width={438}
          height={1100}
          placeholder="blur"
          src={arima}
          className="size-full object-cover transition-all duration-500 group-hover:scale-[1.35]"
        />
        <p className="quote absolute left-2 top-3 z-10 text-[10px] font-extrabold tracking-[0.2rem] text-black dark:text-black">
          それは彼女に届きましたか
        </p>
      </button>
    </BentoCard>
  )
}

export default AnimeCard2
