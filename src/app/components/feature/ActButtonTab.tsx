'use client'
import React from 'react'

import { useMemoizedFn } from 'ahooks'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import ActButton from '@/app/components/feature/ActButton'

import { useLinkPrefetch } from '@/hooks/useLinkPrefetch'

type Props = {
  buttons: { text: string, link: string }[]
  imagePath: string
  activeImagePath: string
  btnWrapperClassName?: string
  wrapperClassName?: string
  textClassName?: string
  activeTextClassName?: string
  onClick?: () => void
  onMouseEnter?: () => void
}

const ActButtonTab = (props: Props) => {
  const { buttons, imagePath, activeImagePath, btnWrapperClassName, wrapperClassName, textClassName, activeTextClassName, onClick, onMouseEnter } = props
  const pathname = usePathname();
  const router = useRouter();

  useLinkPrefetch(buttons.map(button => button.link))

  const isActive = useMemoizedFn((link: string) => {
    return pathname.includes(link);
  })

  const handleClick = useMemoizedFn((link: string) => {
    if (isActive(link)) return
    onClick?.()
    router.replace(link)
  })

  return (
    <div className={twMerge('w-full flex items-center justify-center', wrapperClassName)}>
      {
        buttons.map((button) => {
          const active = isActive(button.link)
          const currentImage = active ? activeImagePath : imagePath
          return (
            <ActButton
              key={button.link}
              imagePath={currentImage}
              buttonText={button.text}
              wrapperClassName={btnWrapperClassName}
              className={twMerge(textClassName, active && activeTextClassName)}
              onMouseEnter={() => {
                onMouseEnter?.()
              }}
              onClick={() => handleClick(button.link)}
            />
          )
        })
      }
    </div>
  )
}

export default ActButtonTab