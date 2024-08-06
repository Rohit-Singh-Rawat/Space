import BentoIcon from '../Icons/BentoIcon'
import AnimeCard from './BentoCards/AnimeCard'
import StacksCard from './BentoCards/StacksCard'
import Chopstiks from './Chopstiks'

const Bento = () => {
  return (
    <div className="mt-16 space-y-10">
      <div className="flex items-baseline gap-2">
        <p className="font-neu underline underline-offset-2">Bento</p>
        <BentoIcon className="w-5" />
        <Chopstiks className="w-5 -translate-x-5 -translate-y-1" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <StacksCard />
        <AnimeCard />
      </div>
    </div>
  )
}
export default Bento
