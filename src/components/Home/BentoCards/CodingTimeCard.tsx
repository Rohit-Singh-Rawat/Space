import BentoCard from './BentoCard'
import NumberTicker from '@/components/ui/NumberTicket'
import Link from 'next/link'
import CodeIcon from '@/components/Icons/CodeIcon'
import { VsCode } from '@/components/Icons/StackIcons/VS'
import { Terminal } from '@/components/Icons/Terminal'
import { getCodingHrs } from '@/lib/getCodingHrs'
async function CodingTimeCard() {
  const { seconds } = await getCodingHrs()
  const hours = Math.round(seconds / 3600)

  return (
    <BentoCard className="group col-span-5 row-span-1 flex h-full flex-col items-start justify-start p-4 xs:col-span-2 xs:row-span-2">
      <CodeIcon className="size-5 fill-gray-900 dark:fill-stone-600" />
      <Link
        href={'https://wakatime.com/@Whale_In_Space'}
        target="_blank"
        className="flex size-full -translate-y-5 flex-col items-center justify-center gap-3"
      >
        <VsCode className="absolute right-0 top-0 -z-50 size-16 -translate-y-2 translate-x-2 blur-sm transition-all delay-100 duration-500 ease-in group-hover:blur-0 dark:brightness-50" />
        <div>
          <span className="bg-gradient-to-b from-white to-black bg-clip-text font-lombok text-5xl font-bold text-transparent">
            {hours ? (
              <NumberTicker
                className="bg-gradient-to-b from-white to-black bg-clip-text font-lombok text-5xl font-bold text-transparent"
                value={hours}
              />
            ) : (
              '--'
            )}
          </span>
          <span className="bg-gradient-to-b from-blue-500 from-50% to-[#020122] bg-clip-text font-lombok text-2xl font-semibold text-transparent">
            {' '}
            hrs
          </span>
        </div>
        <div className="text-center font-lombok font-medium text-emerald-400">
          coding <span className="block text-center text-xs">(Wakatime)</span>
        </div>{' '}
        <Terminal className="absolute bottom-0 left-0 -z-50 size-16 -translate-x-2 translate-y-4 blur-sm transition-all delay-100 duration-500 ease-in group-hover:blur-0 dark:brightness-50 dark:invert-[20%]" />
      </Link>
    </BentoCard>
  )
}
export default CodingTimeCard
