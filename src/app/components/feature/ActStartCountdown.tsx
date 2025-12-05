'use client'
import React, { useMemo } from 'react'

import { useCountDown } from 'ahooks'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'

type ActCountdownShowProps = {
  actStartTime: number
}

const ActCountdownShow = ({ actStartTime }: ActCountdownShowProps) => {
  const t = useTranslations()
  const { startTime, isStart } = useMemo(() => {
    const now = Date.now()
    const start = actStartTime * 1000
    return {
      startTime: dayjs(start).toISOString(),
      isStart: now >= start
    }
  }, [actStartTime])

  const [, formattedRes] = useCountDown({
    targetDate: startTime,
    onEnd: () => {
      if (!isStart) {
        window.location.reload()
      }
    }
  })
  const { hours, minutes, seconds } = formattedRes

  if (isStart) {
    return null
  }

  return (
    <div className='bg-[#ececec] text-black opacity-80 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-5/6 rounded-sm py-[20px] px-[20px] text-[34px] whitespace-nowrap'>
      {t('actStartDesc')}：
      <span className='text-[46px]'>{`${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</span>
    </div>
  )
}

export default ActCountdownShow