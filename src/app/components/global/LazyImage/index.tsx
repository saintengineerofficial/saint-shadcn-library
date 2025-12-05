'use client'

import React, { forwardRef, useRef } from 'react';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type ImageProps = React.ComponentProps<typeof Image>;
export interface LazyImageProps extends Omit<ImageProps, 'loading'> {
  src: string;
  alt: string;
  loading?: string;
  lazy?: boolean;
  className?: string;
}

const base64 = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/x8AAqMB0Fk+W34AAAAASUVORK5CYII='

const LazyImage = forwardRef<HTMLDivElement, LazyImageProps>((props, ref) => {

  const { src = base64, className, alt = '', loading = base64, lazy = false, ...rest } = props

  const imgRef = useRef<HTMLImageElement | null>(null);

  const observerRef = useIntersectionObserver(imgRef, { freezeOnceVisible: true });

  return (
    <div ref={ref} className={twMerge('relative', className)}>
      <Image
        className='w-full h-full object-contain'
        ref={imgRef}
        src={observerRef?.isIntersecting || !lazy ? src : loading}
        alt={alt}
        draggable={false}
        fill
        sizes='100%'
        {...rest}
      />
    </div>
  );
})

LazyImage.displayName = 'LazyImage'

export default LazyImage;