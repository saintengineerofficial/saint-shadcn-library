import React from 'react'

import { ActDecorateContainerConfig } from './config'
import DecorateContainer from '.'
import Spacing from '../Spacing'

const Demo = () => {
  const titleSection = {
    title: 'Rules',
    className: '',
  }

  const config = { ...ActDecorateContainerConfig.Rules, titleSection }

  return (
    <DecorateContainer {...config} isOnlyContent className="mx-auto max-w-[630px] px-6 py-10">
      <div className="flex flex-col gap-2 px-10">
        <Spacing h='h-[100px]'></Spacing>
        <p className="text-white">
          Life is short, so we have to make it count. Life is short, so we have to make it count. Life is short, so we
          have to make it count.
          Life is short, so we have to make it count. Life is short, so we have to make it count. Life is short, so we
          have to make it count.
          Life is short, so we have to make it count. Life is short, so we have to make it count. Life is short, so we
          have to make it count.
        </p>
      </div>
    </DecorateContainer>
  )
}

export default Demo
