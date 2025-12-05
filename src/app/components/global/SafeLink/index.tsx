'use client'
import React, { PropsWithChildren } from 'react'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type SafeLinkProps = {
  href: Url
  disabled?: boolean
}

const SafeLink = ({ href, children, disabled }: PropsWithChildren<SafeLinkProps>) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) e.preventDefault();
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default SafeLink