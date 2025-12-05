'use client'
import React from 'react'

import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const ActCopyright = ({ className }: Props) => {
  const t = useTranslations()
  return (
    <div className={twMerge('w-full py-[20px] text-[#fff] text-[24px] text-center', className)}>{t('copyright')}</div>
  )
}

export default ActCopyright