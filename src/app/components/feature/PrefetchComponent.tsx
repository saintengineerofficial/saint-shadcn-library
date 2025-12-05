'use client'
import { useQueryClient } from '@tanstack/react-query'

import { useIdleCallback } from '@/hooks/useIdleCallback'
import { CommonActApi } from '@/services/_common'

type PrefetchComponentProps = {
  activitiesId: number
}

const PrefetchComponent = ({ activitiesId }: PrefetchComponentProps) => {
  const queryClient = useQueryClient()
  useIdleCallback(() => {
    queryClient.prefetchQuery({
      queryKey: ['actRewardConfig', activitiesId],
      queryFn: () => CommonActApi.getActRewardConfigProxy({ activitiesId }),
      staleTime: 1000 * 60 * 60,
    })
  })
  return null
}

export default PrefetchComponent