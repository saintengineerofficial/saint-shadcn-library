
import React, { forwardRef } from 'react';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type ImageProps = React.ComponentProps<typeof Image>;

const BaseImage = forwardRef<HTMLDivElement, ImageProps>((props, ref) => {

  const { src, className, alt = '', ...rest } = props

  return (
    <div ref={ref} className={twMerge('relative', className)}>
      <Image
        className='w-full h-full object-contain'
        src={src}
        alt={alt}
        draggable={false}
        fill
        sizes='100%'
        {...rest}
      />
    </div>
  );
})

BaseImage.displayName = 'BaseImage'

export default BaseImage;