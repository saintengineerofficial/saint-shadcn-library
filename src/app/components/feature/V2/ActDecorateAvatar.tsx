import React, { type PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

import InternalAvatar from '@/app/components/feature/InternalAvatar'
import BackgroundSectionAsync from '@/app/components/global/BackgroundSectionAsync'


import ActAvatarClickWrapper from './ActAvatarClickWrapper'


type ActDecorateAvatarProps = {
  avatarUrl: string
  avatarClassName: string
  decorateAvatarClassName?: string
  backgroundImagePath?: string
  backgroundClassName?: string
  uid?: number
  guildId?: number
  onClick?: () => void
}

const ActDecorateAvatar = (props: PropsWithChildren<ActDecorateAvatarProps>) => {
  const { avatarUrl, backgroundImagePath, backgroundClassName, avatarClassName, decorateAvatarClassName, uid, guildId, children, onClick } = props

  return (
    <ActAvatarClickWrapper uid={uid} guildId={guildId} className={decorateAvatarClassName} onClick={onClick}>
      <InternalAvatar src={avatarUrl} className={twMerge('size-[120px] absolute translate-x-[-50%] left-1/2 top-[10px]', avatarClassName)} />
      {backgroundImagePath && <BackgroundSectionAsync imagePath={backgroundImagePath} className={twMerge(backgroundClassName)} />}
      {children}
    </ActAvatarClickWrapper >
  )
}


export default ActDecorateAvatar