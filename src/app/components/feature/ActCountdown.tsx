'use client'
import React, { useEffect, useMemo, useState } from 'react'

import { useCountDown } from 'ahooks'
import { useLocale } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import BackgroundSectionAsync from '@/app/components/global/BackgroundSectionAsync'

export type CountdownProps = {
  targetDate: string | number | Date
  timeImagePath?: string
  countdownImagePath?: string
  className?: string
  wrapperClassName?: string
  timeClassName?: string
  textClassName?: string
  isDayText?: boolean
}

type TimeBoxProps = {
  value: number;
  label?: string;
  imagePath?: string;
  timeClassName?: string;
  textClassName?: string;
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
}

const dayStrMap: Record<string, string> = {
  'en': 'day',
  'zh': '天',
  'ar': 'يوم',
  'tr': 'gün',
}

const TimeBox = ({ value, label, imagePath, timeClassName, textClassName }: TimeBoxProps) => {
  if (imagePath) {
    return (
      <>
        <BackgroundSectionAsync imagePath={imagePath} className={twMerge('w-[100px] h-[100px]', timeClassName)}>
          {value < 10 ? `0${value}` : value}
        </BackgroundSectionAsync>
        {label && (
          <div className={twMerge('text-[24px] font-bold text-[#fff]', textClassName)}>{label}</div>
        )}
      </>
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
  const { lableDays, days, hours, minutes, seconds, timeImagePath, timeClassName, textClassName, wrapperClassName } = props
  return (
    <div className={twMerge('flex items-center justify-center gap-[10px]', wrapperClassName)}>
      <TimeBox
        value={days}
        label={lableDays}
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
      />
      <TimeBox
        value={hours}
        label=":"
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
      />
      <TimeBox
        value={minutes}
        label=":"
        imagePath={timeImagePath}
        timeClassName={timeClassName}
        textClassName={textClassName}
      />
      <TimeBox
        value={seconds}
        imagePath={timeImagePath}
        timeClassName={timeClassName}
      />
    </div>
  )
}

const ActCountdown = (props: CountdownProps) => {
  const locale = useLocale()
  const { targetDate, timeImagePath, className, timeClassName, textClassName, wrapperClassName, countdownImagePath, isDayText = true } = props
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const [, formattedRes] = useCountDown({
    targetDate,
  })

  const { days, hours, minutes, seconds } = formattedRes

  const countdownDisplay = useMemo(() => {

    if (!isClient) {
      return (
        <div className={twMerge('w-full flex justify-center items-center', className)}>
          <div className={twMerge('flex items-center justify-center gap-[10px]', wrapperClassName)}>
            {/* 占位符，保持布局稳定 */}
            <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
            <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', textClassName)}>:</div>
            <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
            <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', textClassName)}>:</div>
            <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
            <div className={twMerge('text-[24px] font-bold text-[#fff] opacity-0', timeClassName)}>00</div>
          </div>
        </div>
      )
    }

    if (countdownImagePath) {
      return (
        <BackgroundSectionAsync imagePath={countdownImagePath} className={twMerge('w-full flex justify-center items-center', className)}>
          <TimeContent
            lableDays={isDayText ? dayStrMap[locale] : undefined}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            timeImagePath={timeImagePath}
            timeClassName={timeClassName}
            textClassName={textClassName}
            wrapperClassName={wrapperClassName}
          />
        </BackgroundSectionAsync>
      )
    }

    return (
      <div className={twMerge('w-full flex justify-center items-center', className)}>
        <TimeContent
          lableDays={isDayText ? dayStrMap[locale] : undefined}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          timeImagePath={timeImagePath}
          timeClassName={timeClassName}
          textClassName={textClassName}
          wrapperClassName={wrapperClassName}
        />
      </div>
    )
  }, [isClient, countdownImagePath, className, isDayText, locale, days, hours, minutes, seconds, timeImagePath, timeClassName, textClassName, wrapperClassName])


  return countdownDisplay
}

export default ActCountdown