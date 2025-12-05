'use client'

import React, { forwardRef } from 'react'

import { useMemoizedFn } from 'ahooks'
import { twMerge } from 'tailwind-merge'

import InternalAvatar from '@/app/components/feature/InternalAvatar'
import BackgroundSectionAsync from '@/app/components/global/BackgroundSectionAsync'

import TransparentButton from './ActButton/TransparentButton'

import useAppBridge from '@/hooks/useAppBridge'


type ActDecorateAvatarProps = {
  avatarUrl: string
  avatarClassName: string
  decorateAvatarClassName?: string
  backgroundImagePath?: string
  backgroundClassName?: string
  uid?: number
  guildId?: number
  children?: React.ReactNode
}

const ActDecorateAvatar = forwardRef<HTMLButtonElement, ActDecorateAvatarProps>((props, ref) => {
  const { avatarUrl, backgroundImagePath, backgroundClassName, avatarClassName, decorateAvatarClassName, uid, guildId, children, ...rest } = props
  const appBridge = useAppBridge()
  const handleClick = useMemoizedFn(() => {
    if (uid) {
      appBridge.gotoWithScheme(`boli://user_center?uid=${uid}`)
      return
    }
    if (guildId) {
      appBridge.gotoWithScheme(`boli://guild/main?guildId=${guildId}`);
    }
  })
  return (
    <TransparentButton ref={ref} className={twMerge('relative', decorateAvatarClassName)} onClick={handleClick} {...rest}>
      <InternalAvatar src={avatarUrl} className={twMerge('size-[120px] absolute translate-x-[-50%] left-1/2 top-[10px]', avatarClassName)} />
      {backgroundImagePath && <BackgroundSectionAsync imagePath={backgroundImagePath} className={twMerge(backgroundClassName)} />}
      {children}
    </TransparentButton>
  )
})

ActDecorateAvatar.displayName = 'ActDecorateAvatar'

export default ActDecorateAvatar