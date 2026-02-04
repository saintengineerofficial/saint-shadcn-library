import React, { type PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import BackgroundSection from '../BackgroundSection'


type DecorateAvatarProps = {
  avatarUrl: string
  avatarClassName: string
  decorateAvatarClassName?: string
  backgroundImagePath?: string
  backgroundClassName?: string
}
const base64 = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/x8AAqMB0Fk+W34AAAAASUVORK5CYII="

const DecorateAvatar = (props: PropsWithChildren<DecorateAvatarProps>) => {
  const { avatarUrl, backgroundImagePath, backgroundClassName, avatarClassName, decorateAvatarClassName, children } = props

  return (
    <div className={twMerge('relative', decorateAvatarClassName)}>
      <Avatar className={twMerge('size-[120px] absolute translate-x-[-50%] left-1/2 top-[10px]', avatarClassName)} >
        <AvatarImage src={avatarUrl} className='size-full rounded-[inherit] object-cover' />
        <AvatarFallback className="relative size-full rounded-[inherit] overflow-hidden">
          <Image
            src={base64}
            fill
            alt="avatar"
            className="object-cover"
          />
        </AvatarFallback>
      </Avatar>
      {backgroundImagePath &&
        <BackgroundSection imagePath={backgroundImagePath} className={twMerge(backgroundClassName)} />}
      {children}
    </div >
  )
}


export default DecorateAvatar