import React, { Fragment, PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

type Props = {
  wrapperClassName?: string
  animationClassName?: string
}

const Marquee = ({ children, wrapperClassName, animationClassName }: PropsWithChildren<Props>) => {
  return (
    <div
      className={twMerge(
        'w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        wrapperClassName
      )}
    >
      <div className={twMerge('flex flex-none gap-4 animate-more-left', animationClassName)}>
        {
          [...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {children}
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Marquee
