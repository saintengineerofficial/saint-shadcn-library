
'use client'
import dynamic from 'next/dynamic'

const ActStartCountdownAsync = dynamic(() => import('./ActStartCountdown'), {
  ssr: false,
  loading: () => null
})

export { ActStartCountdownAsync }

