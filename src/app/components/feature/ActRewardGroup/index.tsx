'use client'
import React, { useMemo, useRef } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocale } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import BackgroundSection from '@/app/components/global/BackgroundSection';
import Grid from '@/app/components/global/Grid';
import InternalImage from '@/app/components/global/InternalImage';

import { MoreThanThreeLayout } from './config';


import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import type { RewardGift } from '@/app/lib/type';

type Props = {
  rewardItemConfig: {
    backgroundImage: string
    backgroundImageClassName: string
    rewardNameClassName: string
    rewardImageClassName?: string
  }
  rewards: RewardGift[]
  displayLayout: {
    flexLayout?: boolean
    display?: keyof typeof MoreThanThreeLayout
    gap?: number | string | [number | string, number | string];
  },
}

const RewardGroup = ({ rewards, rewardItemConfig, displayLayout }: Props) => {
  const locale = useLocale().toLowerCase()
  const gridRef = useRef<HTMLDivElement>(null)
  const gridItemsRef = useRef<HTMLDivElement[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const matchWidth = rewardItemConfig.backgroundImageClassName.match(/w-\[[^\]]+\]/);
  const finalWidth = matchWidth ? matchWidth[0] : 'w-[200px]';
  const { display, gap, flexLayout } = displayLayout

  const currentLayout = useMemo(() => {
    if (display) {
      return MoreThanThreeLayout[display]
    }
    // 默认布局
    switch (rewards.length) {
      case 7:
        return MoreThanThreeLayout['3x4'];
      case 6:
        return MoreThanThreeLayout['3x3'];
      case 5:
        return MoreThanThreeLayout['2x3'];
      case 4:
        return MoreThanThreeLayout['1x3'];
      case 3:
        return MoreThanThreeLayout['3'];
      default:
        return { columns: rewards.length, rows: 1 };
    }
  }, [display, rewards.length])

  const gridEntry = useIntersectionObserver(gridRef, { threshold: 0.2, rootMargin: "50px 0px", })

  useGSAP(() => {
    if (!gridRef.current) return
    const listItems = gridItemsRef.current.filter(Boolean)
    gsap.set(listItems, {
      opacity: 0,
      scale: 0.9,
    })

    const enter = () => {
      const tl = gsap.timeline()
      listItems.forEach((item, index) => {
        tl.to(item, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: index * 0.1,
        }, 0)
      })
      return tl
    }

    if (gridEntry?.isIntersecting) {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      timelineRef.current = enter()
      timelineRef.current.play()
    }

  }, [gridEntry?.isIntersecting])

  if (flexLayout) {
    return (
      <div ref={gridRef} className='flex flex-wrap gap-[20px] justify-center'>
        {rewards.map((reward, index) => {
          return (
            <div ref={(el) => { gridItemsRef.current[index] = el! }} key={reward.id} className='flex flex-col items-center gap-[5px]'>
              <BackgroundSection imagePath={rewardItemConfig.backgroundImage} className={twMerge('w-[200px] h-[200px]', rewardItemConfig.backgroundImageClassName)}>
                <InternalImage src={reward.cover} alt="rewardBackgroundImage" className={twMerge(rewardItemConfig.rewardImageClassName, 'w-[119px] h-[105px]')} />
              </BackgroundSection>
              <div className={twMerge(`${finalWidth} text-center break-words whitespace-normal text-[22px] text-white`,
                rewardItemConfig.rewardNameClassName)}>
                {locale === 'zh' ? reward.name : reward.nameI18n[locale]}
              </div>
            </div>
          )
        })}
      </div>
    )
  }


  return (
    <Grid ref={gridRef} {...currentLayout} gap={gap}>
      {rewards.map((reward, index) => {
        return (
          <Grid.Item ref={(el) => { gridItemsRef.current[index] = el! }} key={reward.id} className='flex-col gap-[5px]'>
            <BackgroundSection imagePath={rewardItemConfig.backgroundImage} className={twMerge('w-[200px] h-[200px]', rewardItemConfig.backgroundImageClassName)}>
              <InternalImage src={reward.cover} alt="rewardBackgroundImage" className={twMerge(rewardItemConfig.rewardImageClassName, 'w-[119px] h-[105px]')} />
            </BackgroundSection>
            <div className={twMerge(`${finalWidth} text-center break-words whitespace-normal text-[22px] text-white`,
              rewardItemConfig.rewardNameClassName)}>
              {locale === 'zh' ? reward.name : reward.nameI18n[locale]}
            </div>
          </Grid.Item>
        )
      })}
    </Grid>
  )
}

export default RewardGroup