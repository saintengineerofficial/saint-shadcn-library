'use client'

import React, { forwardRef } from 'react'

import { useMemoizedFn } from 'ahooks'
import { twMerge } from 'tailwind-merge'

import InternalAvatar from '@/app/components/feature/InternalAvatar'
import BackgroundSection from '@/app/components/global/BackgroundSection'

import TransparentButton from './ActButton/TransparentButton'



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
  const handleClick = useMemoizedFn(() => {
    alert('执行')
  })
  return (
    <TransparentButton ref={ref} className={twMerge('relative', decorateAvatarClassName)} onClick={handleClick} {...rest}>
      <InternalAvatar src={avatarUrl} className={twMerge('size-[120px] absolute translate-x-[-50%] left-1/2 top-[10px]', avatarClassName)} />
      {backgroundImagePath && <BackgroundSection imagePath={backgroundImagePath} className={twMerge(backgroundClassName)} />}
      {children}
    </TransparentButton>
  )
})

ActDecorateAvatar.displayName = 'ActDecorateAvatar'

export default ActDecorateAvatar