import React from 'react'

import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

const TransitionShadow = ({ className }: Props) => {
  return (
    <div className={cn("absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black/80 to-transparent", className)} />
  )
}

export default TransitionShadow