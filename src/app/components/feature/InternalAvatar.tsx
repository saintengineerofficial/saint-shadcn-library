'use client'

import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export type InternalAvatarProps = {
  src: string
  className?: string
  uid?: number
  guildId?: number
}

const InternalAvatar = ({ src, className, uid, guildId }: InternalAvatarProps) => {
  const handleClick = () => {
    alert('执行')
    // if (uid) {
    //   appBridge.gotoWithScheme(`boli://user_center?uid=${uid}`)
    //   return
    // }
    // if (guildId) {
    //   appBridge.gotoWithScheme(`boli://guild/main?guildId=${guildId}`);
    // }
  }

  return (
    <Avatar className={className} onClick={handleClick}>
      <AvatarImage src={src} className='size-full rounded-[inherit] object-cover' />
      <AvatarFallback className="relative size-full rounded-[inherit] overflow-hidden">
        <Image
          src="https://silkroad-res.resygg.com/avatr/img_user_default_v5.png"
          fill
          alt="avatar"
          className="object-cover"
        />
      </AvatarFallback>
    </Avatar>
  )
}

export default InternalAvatar