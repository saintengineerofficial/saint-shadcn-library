'use client'
import React, { useEffect, useState } from 'react'

import { useCountDown, useMount } from 'ahooks'
import { TDate } from 'ahooks/lib/useCountDown'
import { useLocale } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import BackgroundSectionAsync from '@/app/components/global/BackgroundSectionAsync'

import { useCurrentRange } from '@/hooks/useCurrentRange'
import { LangKey } from '@/services/type'

export type CountdownProps = {
  targetDate: string | number | Date
  startTime?: string | number | Date
  timeImagePath?: string
  countdownImagePath?: string
  dayInterval?: number
  className?: string
  wrapperClassName?: string
  timeClassName?: string
  textClassName?: string
  timeBoxClassName?: string
}

type TimeBoxProps = {
  value: number;
  label?: string;
  imagePath?: string;
  timeClassName?: string;
  textClassName?: string;
  timeBoxClassName?: string;
}

type TimeContentProps = {
  days: number
  hours: number
  minutes: number
  seconds: number
  lableDays?: string
  timeImagePath?: string
  timeClassName?: string
  textClassName?: string
  wrapperClassName?: string
  timeBoxClassName?: string
}

const languageTimeMap: Record<LangKey, Record<string, string>> = {
  'zh': {
    'days': '天',
    'hours': '小时',
    'minutes': '分钟',
    'seconds': '秒',
  },
  'en': {
    'days': 'Days',
    'hours': 'Hours',
    'minutes': 'Min',
    'seconds': 'Sec',
  },
  'ar': {
    'days': 'أيام',
    'hours': 'ساعات',
    'minutes': 'دقائق',
    'seconds': 'ثوان',
  },
  'tr': {
    'days': 'Gün',
    'hours': 'Saat',
    'minutes': 'Dakika',
    'seconds': 'Saniye',
  }
}

const Placeholder = ({ className, timeClassName, textClassName, wrapperClassName }: Pick<CountdownProps, 'className' | 'timeClassName' | 'textClassName' | 'wrapperClassName'>) => {
  return (
    <div className={twMerge('w-full flex justify-center items-center', className)}>
      <div className={twMerge('flex items-center justify-center gap-[10px]', wrapperClassName)}>
        <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
        <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', textClassName)}>:</div>
        <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
        <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', textClassName)}>:</div>
        <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
        <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
      </div>
    </div>
  );
}

const TimeBox = ({ value, label, imagePath, timeClassName, textClassName, timeBoxClassName }: TimeBoxProps) => {
  if (imagePath) {
    return (
      <BackgroundSectionAsync
        imagePath={imagePath}
        className={twMerge('w-[100px] h-[100px]', timeClassName)}
        childrenClassName={twMerge('flex-col', timeBoxClassName)}>
        <p className='flex-none leading-tight'>{value < 10 ? `0${value}` : value}</p>
        <div className={twMerge('flex-none text-[24px] text-[#fff]', textClassName)}>{label}</div>
      </BackgroundSectionAsync>
    )
  }

  return (
    <>
      <div className={twMerge('text-[24px] font-bold text-[#fff]', timeClassName)}>{value < 10 ? `0${value}` : value}</div>
      {label && (
        <div className={twMerge('text-[24px] font-bold text-[#fff]', textClassName)}>{label}</div>
      )}
    </>
  )
}

const TimeContent = (props: TimeContentProps) => {
  const locale = useLocale().toLowerCase() as LangKey
  const { days, hours, minutes, seconds, timeImagePath, timeClassName, textClassName, wrapperClassName, timeBoxClassName } = props
  return (
    <div className={twMerge('flex items-center justify-center gap-[10px]', wrapperClassName)}>
      <TimeBox
        value={days}
        label={languageTimeMap[locale].days}
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
        timeBoxClassName={timeBoxClassName}
      />
      <TimeBox
        value={hours}
        label={languageTimeMap[locale].hours}
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
        timeBoxClassName={timeBoxClassName}
      />
      <TimeBox
        value={minutes}
        label={languageTimeMap[locale].minutes}
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
        timeBoxClassName={timeBoxClassName}
      />
      <TimeBox
        value={seconds}
        label={languageTimeMap[locale].seconds}
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
        timeBoxClassName={timeBoxClassName}
      />
    </div>
  )
}

const ActCountdownV2 = React.memo((props: CountdownProps) => {
  const { targetDate, timeImagePath, className, timeClassName, textClassName, wrapperClassName, countdownImagePath, timeBoxClassName, startTime, dayInterval } = props

  const [isClient, setIsClient] = useState(false)
  const [currentEndTime, setCurrentEndTime] = useState<TDate>()

  const currentRange = useCurrentRange(Number(startTime), Number(targetDate), dayInterval)

  useEffect(() => {
    setCurrentEndTime(currentRange?.end || targetDate)
  }, [currentRange, targetDate])


  useMount(() => {
    setIsClient(true)
  })

  const [, formattedRes] = useCountDown({
    targetDate: currentEndTime,
  })

  const { days, hours, minutes, seconds } = formattedRes

  // 占位符
  if (!isClient) {
    return <Placeholder {...props} />
  }

  // 背景图
  if (countdownImagePath) {
    return (
      <BackgroundSectionAsync imagePath={countdownImagePath} className={twMerge('w-full flex justify-center items-center', className)}>
        <TimeContent
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          timeImagePath={timeImagePath}
          timeClassName={timeClassName}
          textClassName={textClassName}
          wrapperClassName={wrapperClassName}
          timeBoxClassName={timeBoxClassName}
        />
      </BackgroundSectionAsync>
    )
  }

  return (
    <div className={twMerge('w-full flex justify-center items-center', className)}>
      <TimeContent
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        timeImagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
        wrapperClassName={wrapperClassName}
        timeBoxClassName={timeBoxClassName}
      />
    </div>
  )

})

ActCountdownV2.displayName = 'ActCountdownV2'

export default ActCountdownV2