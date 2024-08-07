import Image from 'next/image'
import BentoCard from './BentoCard'

const AnimeCard2 = () => {
  return (
    <BentoCard className="col-span-1 row-span-2 h-56 p-0 transition-all duration-500 hover:scale-95">
      <Image
        alt="anime"
        width={20}
        height={100}
        src={'/images/your lie in april.jpg'}
        className="w-full transition-all duration-500 hover:scale-[1.35]"
      />
    </BentoCard>
  )
}
export default AnimeCard2
