'use client'
import React from 'react'

import { twMerge } from 'tailwind-merge'

import InternalImage from '../InternalImage'

type Props = {
  error?: any
  data?: any
  className?: string
}

const DataEmptyError = ({ error, data, className }: Props) => {
  if (!error || !data?.length || !data?.res?.length) {
    return (
      <div className={twMerge('h-[1000px] relative z-[100] w-screen flex flex-col items-center justify-center gap-2 text-white', className)}>
        <InternalImage src='https://web.boli.live/activity-web/upload/common/yigo-error-v2/error-empty-app.png' alt='error' className='w-[100px] h-[100px]' />
        <span className='text-[26px] font-600'>No data</span>
      </div>
    )
  }

  return (
    <div className={twMerge('h-[400px] relative z-[100] w-screen flex flex-col items-center justify-center gap-2 text-white', className)}>
      <InternalImage src='https://web.boli.live/activity-web/upload/common/yigo-error-v2/error-request.png' alt='error' className='w-[100px] h-[100px]' />
      <span className='text-[26px] font-600'>{error?.message?.error || 'fetch error'}</span>
    </div>
  )
}

export default DataEmptyError
