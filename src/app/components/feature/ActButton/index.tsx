'use client'
import React from 'react'

import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'
import BackgroundSection from '../../global/BackgroundSection'

type ButtonProps = React.ComponentProps<typeof Button>

interface Props extends ButtonProps {
  imagePath: string
  buttonText?: string
  link?: string
  appSchema?: string
  backgroundWrapperClassName?: string
  wrapperClassName?: string
  imageClassName?: string
  wrapperStyle?: React.CSSProperties
}

const ActButton = (props: Props) => {
  const { imagePath, backgroundWrapperClassName, buttonText, link, appSchema, className, wrapperClassName, wrapperStyle, children, imageClassName, ...rest } = props


  return (
    <BackgroundSection
      imagePath={imagePath}
      imageClassName={imageClassName}
      childrenClassName={backgroundWrapperClassName}
      className={twMerge('w-[358px] h-[134px]', wrapperClassName)}
      style={wrapperStyle}>
      <Button
        {...rest}
        variant="link"
        className={twMerge('text-[28px] text-[#FFFFFF] font-bold w-full h-full', className)}
        asChild>
        {children || <span>{buttonText}</span>}
      </Button>
    </BackgroundSection>
  )
}

export default ActButton