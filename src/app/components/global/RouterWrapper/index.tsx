'use client'
import React, { useEffect, type PropsWithChildren } from 'react'

import { useRouter } from 'next/navigation';


export interface RouterWrapperProps {
  link?: string
  back?: boolean
  replace?: boolean
  prefetch?: boolean
  refresh?: boolean  // 是否在导航后刷新 Server Components
  className?: string
  onClick?: () => void | boolean
}

const RouterWrapper = ({ children, className, link, back = false, replace = false, prefetch = true, refresh = false, onClick }: PropsWithChildren<RouterWrapperProps>) => {
  const router = useRouter();
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
    if (link && replace) {
      router.replace(link);
      return
    }
    if (link) {
      router.push(link);
      if (refresh) {
        router.refresh();
      }
      return
    }
  }

  useEffect(() => {
    if (link && prefetch) {
      router.prefetch(link)
    }
  }, [link, prefetch, router])

  return (
    <div className={className} onClick={handleClick}>{children}</div>
  )
}

export default RouterWrapper