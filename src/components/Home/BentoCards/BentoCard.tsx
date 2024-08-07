import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  children?: React.ReactNode
  className?: string
}

const BentoCard = ({ children, className }: Props) => {
  return (
    <div className={cn('bento group/bentoCard', className)}>
      {children}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover/bentoCard:bg-black/[.015] group-hover/bentoCard:dark:bg-neutral-800/10" />
    </div>
  )
}

export default BentoCard
