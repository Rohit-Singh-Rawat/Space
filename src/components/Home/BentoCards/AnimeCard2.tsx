import Image from 'next/image'
import BentoCard from './BentoCard'

const AnimeCard2 = () => {
  return (
    <BentoCard className="relative col-span-1 row-span-2 h-56 p-0 transition-all duration-500 hover:scale-95">
      <Image
        alt="anime"
        width={438}
        height={1100}
        src={'/images/arima.jpg'}
        className="w-full object-cover transition-all duration-500 hover:scale-[1.35]"
      />
      <p className="absolute top-0 z-10">それは彼女に届きましたか</p>
    </BentoCard>
  )
}
export default AnimeCard2
