import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const CdBack = () => {
  return (
    <div className="flex items-center justify-start gap-1 py-5">
      <ChevronRight className="size-4 stroke-black dark:stroke-white" />
      <Link
        href={'/'}
        className="bg-transparent tracking-wide text-black underline decoration-[#4B4B4B] decoration-[1.2px] underline-offset-4 opacity-50 transition-all duration-300 hover:opacity-100 dark:text-white"
      >
        cd <span className="tracking-[0.4rem]">..</span>
      </Link>
    </div>
  )
}
export default CdBack
