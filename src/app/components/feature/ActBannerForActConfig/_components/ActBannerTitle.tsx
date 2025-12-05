import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import { twMerge } from 'tailwind-merge'

import type { DataConfigBannerTitle } from '@/services/_common/type'

type Props = {
  titleMapImage: DataConfigBannerTitle
  titleText?: string
  titleTextClassName?: string
}

const ActBannerTitle = async ({ titleMapImage, titleText, titleTextClassName }: Props) => {
  const locale = (await getLocale()).toUpperCase() as keyof DataConfigBannerTitle
  const t = await getTranslations()

  return <div className='relative w-full h-full'>
    <Image src={titleMapImage[locale] ?? titleMapImage['EN']} fill sizes='100%' alt="title" className='object-contain' />
    {titleText?.length && <p className={twMerge('absolute bottom-[10px] left-[50%] translate-x-[-50%] text-[#fff] text-[32px] font-600', titleTextClassName)}>
      {t(titleText)}
    </p>}
  </div>
}

export default ActBannerTitle
