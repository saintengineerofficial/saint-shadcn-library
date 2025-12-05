'use client'
import React, { useState } from 'react'

import { useCountDown, useMount } from 'ahooks'
import { useLocale } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import BackgroundSection from '@/app/components/global/BackgroundSection'
import { useCurrentRange } from '@/hooks/useCurrentRange'


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

const languageTimeMap: Record<string, Record<string, string>> = {
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
      <BackgroundSection
        imagePath={imagePath}
        className={twMerge('w-[100px] h-[100px]', timeClassName)}
        childrenClassName={twMerge('flex-col', timeBoxClassName)}>
        <p className='flex-none leading-tight'>{value < 10 ? `0${value}` : value}</p>
        <div className={twMerge('flex-none text-[24px] text-[#fff]', textClassName)}>{label}</div>
      </BackgroundSection>
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
  const locale = useLocale().toLowerCase()
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

  const currentRange = useCurrentRange(Number(startTime), Number(targetDate), dayInterval)

  useMount(() => {
    setIsClient(true)
  })

  const [, formattedRes] = useCountDown({
    targetDate: currentRange?.end || targetDate,
  })

  const { days, hours, minutes, seconds } = formattedRes

  // 占位符
  if (!isClient) {
    return <Placeholder {...props} />
  }

  // 背景图
  if (countdownImagePath) {
    return (
      <BackgroundSection imagePath={countdownImagePath} className={twMerge('w-full flex justify-center items-center', className)}>
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
      </BackgroundSection>
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