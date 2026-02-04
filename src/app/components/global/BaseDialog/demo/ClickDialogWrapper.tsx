'use client'

import React, { type PropsWithChildren } from 'react'

import { DialogType } from './Async'
import { openDialog } from '../dialogService'

type Props = {
  dialogType: keyof typeof DialogType
  value?: unknown
  single?: string | number
}

const ClickDialogWrapper = ({ dialogType, value, single, children }: PropsWithChildren<Props>) => {

  const handleClick = () => {
    if (dialogType) {
      openDialog(DialogType[dialogType], { value, single })
    }
  }
  return (
    <div className='w-full h-full' onClick={handleClick}>{children}</div>
  )
}

export default ClickDialogWrapper