'use client'
import React from 'react'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import BackgroundSectionAsync from '@/app/components/global/BackgroundSectionAsync'
import { Button, ButtonProps } from '@/components/ui/button'

import useAppBridge from '@/hooks/useAppBridge'

interface Props extends ButtonProps {
  imagePath: string
  buttonText?: string
  link?: string
  appSchema?: string
  backgroundWrapperClassName?: string
  wrapperClassName?: string
  imageClassName?: string
  className?: string
  wrapperStyle?: React.CSSProperties
  onClick?: (event: React.MouseEvent) => void
  onMouseEnter?: () => void
  children?: React.ReactNode
}

const ActButton = (props: Props) => {
  const { imagePath, backgroundWrapperClassName, buttonText, link, appSchema, onClick, className, wrapperClassName, wrapperStyle, onMouseEnter, children, imageClassName, ...rest } = props
  const t = useTranslations()
  const appBridge = useAppBridge()
  const router = useRouter();

  const handleClick = (event: React.MouseEvent) => {
    if (appSchema) {
      appBridge?.gotoWithScheme(appSchema)
    }
    if (link) {
      router.replace(link)
    }
    onClick?.(event)

  }

  return (
    <BackgroundSectionAsync
      imagePath={imagePath}
      imageClassName={imageClassName}
      childrenClassName={backgroundWrapperClassName}
      className={twMerge('w-[358px] h-[134px]', wrapperClassName)}
      style={wrapperStyle}>
      <Button
        {...rest}
        variant="link"
        className={twMerge('text-[28px] text-[#FFFFFF] font-bold w-full h-full', className)}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        asChild>
        {children || <span>{buttonText && t(buttonText)}</span>}
      </Button>
    </BackgroundSectionAsync>
  )
}

export default ActButton