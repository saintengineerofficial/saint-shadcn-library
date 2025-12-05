import React from 'react'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge';

import VideoPlayer from '@/app/components/global/VideoPlayer';

import ActBannerTitle from './_components/ActBannerTitle';

import type { DataConfig } from '@/services/_common/type'

type Props = {
  dataConfig: DataConfig
  bannerClassName?: string
  bannerTitleClassName?: string
  titleText?: string
  titleTextClassName?: string
}

const ActBannerForActConfig = ({ dataConfig, bannerClassName, bannerTitleClassName, titleText, titleTextClassName }: Props) => {
  const isMp4 = dataConfig.banner.cover.includes('mp4')
  return (
    <section className="w-full relative">
      <div className={twMerge('relative w-[750px] h-[950px]', bannerClassName)}>
        {
          isMp4 ? <VideoPlayer src={dataConfig.banner.cover} className="w-full h-full object-contain" /> :
            <Image src={dataConfig.banner.cover} alt="title" fill sizes='100%' priority className="object-contain" />
        }
      </div>
      <div className={twMerge('absolute top-0 left-0 w-[750px] h-[250px]', bannerTitleClassName)}>
        <ActBannerTitle
          titleMapImage={dataConfig.banner.title}
          titleText={titleText}
          titleTextClassName={titleTextClassName}
        />
      </div>
    </section>
  )
}

export default ActBannerForActConfig