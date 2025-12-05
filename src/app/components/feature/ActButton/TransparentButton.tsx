import React, { forwardRef } from 'react'

import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'

type TransparentButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const TransparentButton = forwardRef<HTMLButtonElement, TransparentButtonProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <Button
      ref={ref}
      variant='ghost'
      className={twMerge('bg-transparent p-0 shadow-none hover:bg-transparent active:bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0', className)}
      {...rest}
    >
      {children}
    </Button>
  )
})

TransparentButton.displayName = 'TransparentButton'

export default TransparentButton