'use client'
import React from 'react'

import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import BackgroundSectionAsync from '../global/BackgroundSectionAsync'


type ActRewardBgTitleProps = {
  titleImagePath: string
  title: string
  className?: string
  titleClassName?: string
}

const ActRewardBgTitle = ({ titleImagePath, title, className, titleClassName }: ActRewardBgTitleProps) => {
  const t = useTranslations()
  return (
    <BackgroundSectionAsync imagePath={titleImagePath} className={className} >
      <span className={twMerge('text-[36px] text-[#FFEC1C] font-bold pb-[10px]', titleClassName)}>{t(title)}</span>
    </BackgroundSectionAsync>
  )
}

export default ActRewardBgTitle
