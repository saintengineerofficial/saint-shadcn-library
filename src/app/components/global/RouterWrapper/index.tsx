'use client'
import React, { useEffect, useMemo, type PropsWithChildren } from 'react'

import { useRouter, useSearchParams } from 'next/navigation';

import { } from '@/lib/utils';
import { appendQueryString } from './utils';
export interface RouterWrapperProps {
  link?: string
  back?: boolean
  replace?: boolean
  prefetch?: boolean
  refresh?: boolean  // 是否在导航后刷新 Server Components
  scrollOffset?: number  // 跳转后滚动的距离(px),正数向下滚动
  className?: string
  onClick?: () => void | boolean
}


const RouterWrapper = (props: PropsWithChildren<RouterWrapperProps>) => {
  const { children, className, link, back = false, replace = false, prefetch = true, refresh = false, scrollOffset, onClick } = props
  const router = useRouter();

  const searchParams = useSearchParams();
  const uParam = searchParams.get('u')

  const targetLink = useMemo(() => {
    if (!link) return null
    return appendQueryString(link, uParam)
  }, [link, uParam])

  const handleClick = () => {
    const shouldContinue = onClick?.()

    // 如果 onClick 返回 false，则阻止路由跳转
    if (shouldContinue === false) {
      return
    }

    if (back) {
      router.back();
      return
    }
    if (targetLink && replace) {
      router.replace(targetLink);
      return
    }
    if (targetLink) {
      router.push(targetLink);
      if (scrollOffset) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollOffset, behavior: "smooth" });
        });

      }
      if (refresh) {
        router.refresh();
      }
      return
    }
  }

  useEffect(() => {
    if (targetLink && prefetch) {
      router.prefetch(targetLink)
    }
  }, [targetLink, prefetch, router])

  return (
    <div className={className} onClick={handleClick}>{children}</div>
  )
}

export default RouterWrapper
