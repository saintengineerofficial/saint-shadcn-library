'use client'
import React from 'react'

import { useMemoizedFn } from 'ahooks'
import { twMerge } from 'tailwind-merge'

import TransparentButton from '../ActButton/TransparentButton'

import useAppBridge from '@/hooks/useAppBridge'

type Props = {
  uid?: number
  guildId?: number
  className?: string
  onClick?: () => void
}

const ActAvatarClickWrapper = ({ uid, guildId, children, className, onClick }: React.PropsWithChildren<Props>) => {

  const appBridge = useAppBridge()
  const handleClick = useMemoizedFn(() => {
    if (uid) {
      appBridge.gotoWithScheme(`boli://user_center?uid=${uid}`)
      return
    }
    if (guildId) {
      appBridge.gotoWithScheme(`boli://guild/main?guildId=${guildId}`);
      return
    }
    onClick?.()
  })

  return (
    <TransparentButton className={twMerge('relative', className)} onClick={handleClick}  >
      {children}
    </TransparentButton>
  )
}

export default ActAvatarClickWrapper