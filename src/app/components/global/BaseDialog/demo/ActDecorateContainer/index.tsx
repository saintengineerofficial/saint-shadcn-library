import React from 'react'


import { ActDecorateContainerConfig, ActDecorateContainerType } from './config'
import DecorateContainer from '../../../DecorateContainer'


type Props = {
  containerType: ActDecorateContainerType
  title?: string
  className?: string
}

const ActDecorateContainer = ({ containerType, children, className, title }: React.PropsWithChildren<Props>) => {

  // 如果title存在，则添加titleSection
  const titleSection = {
    title,
    className: ""
  }

  const config = { ...ActDecorateContainerConfig[containerType], titleSection }

  return (
    <DecorateContainer {...config} className={className} isOnlyContent>
      {children}
    </DecorateContainer>
  )
}

export default ActDecorateContainer