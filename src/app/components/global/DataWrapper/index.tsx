import React, { PropsWithChildren } from 'react'

import DataEmptyError from '../DataEmptyError'

type Props = {
  list: any[] | undefined
  error?: any
  errorClassName?: string
}

const DataWrapper = ({ list, error, children, errorClassName }: PropsWithChildren<Props>) => {
  return (
    list && list.length > 0 ? children : <DataEmptyError data={list} error={error} className={errorClassName} />
  )
}

export default DataWrapper
