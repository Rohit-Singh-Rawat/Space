import StacksCard from '@/components/Home/BentoCards/StacksCard'
import { NodejsIcon } from '@/components/Icons/StackIcons/nodejsIcon'
import { Vite } from '@/components/Icons/StackIcons/vite'

const page = () => {
  return (
    <section className="pb-16 pt-8 md:mt-8 lg:mt-10">
      <Vite className="size-10 grayscale hover:grayscale-0 dark:invert dark:hover:invert-0" />
      <StacksCard />
      <NodejsIcon />
    </section>
  )
}
export default page
