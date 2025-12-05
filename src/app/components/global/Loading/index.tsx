import React, { PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

interface LoadingWrapperProps {
  isLoading: boolean
  className?: string
}

const Loading = () => {
  return (
    <div className="w-32 h-32 relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl animate-pulse" />
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-12 bg-cyan-500 rounded-full animate-[bounce_1s_ease-in-out_infinite]" />
          <div className="w-1.5 h-12 bg-blue-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.1s]" />
          <div className="w-1.5 h-12 bg-indigo-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.2s]" />
          <div className="w-1.5 h-12 bg-purple-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.3s]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent animate-pulse" />
      </div>
    </div>
  )
}

const LoadingWrapper = ({ isLoading, children, className }: PropsWithChildren<LoadingWrapperProps>) => {
  if (isLoading) {
    return (
      <div className={twMerge('relative min-h-[500px] flex items-center justify-center', className)}>
        <Loading />
      </div>
    )
  }
  return children
}

export default LoadingWrapper

