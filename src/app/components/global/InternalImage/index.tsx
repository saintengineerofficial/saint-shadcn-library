import React, { forwardRef, type ComponentProps } from 'react';

import Image, { type StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

export interface InternalImageProps
  extends Omit<ComponentProps<typeof Image>, 'src' | 'alt'> {
  src?: string | StaticImageData;
  alt?: string;
}

const base64 = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/x8AAqMB0Fk+W34AAAAASUVORK5CYII='

const InternalImage = forwardRef<HTMLDivElement, InternalImageProps>((props, ref) => {

  const { src, className, alt = '', ...rest } = props

  return (
    <div ref={ref} className={twMerge('relative', className)}>
      <Image
        className='w-full h-full object-contain'
        src={src || base64}
        alt={alt || 'alt'}
        draggable={false}
        fill
        sizes='100%'
        {...rest}
      />
    </div>
  );
})

InternalImage.displayName = 'InternalImage'

export default InternalImage;