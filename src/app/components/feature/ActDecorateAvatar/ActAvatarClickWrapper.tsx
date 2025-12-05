'use client'
import React from 'react'

import { useMemoizedFn } from 'ahooks'
import { twMerge } from 'tailwind-merge'

import TransparentButton from '../ActButton/TransparentButton'

type Props = {
  uid?: number
  guildId?: number
  className?: string
  onClick?: () => void
}

const ActAvatarClickWrapper = ({ uid, guildId, children, className, onClick }: React.PropsWithChildren<Props>) => {

  const handleClick = useMemoizedFn(() => {
    alert('执行')
    onClick?.()
  })

  return (
    <TransparentButton className={twMerge('relative', className)} onClick={handleClick}  >
      {children}
    </TransparentButton>
  )
}

export default ActAvatarClickWrapper