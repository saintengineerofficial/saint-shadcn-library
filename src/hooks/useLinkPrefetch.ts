import { useEffect } from "react"

import { useRouter } from "next/navigation"

export const useLinkPrefetch = (links: string[]) => {
  const router = useRouter()
  useEffect(() => {
    links.forEach(link => {
      router.prefetch(link)
    })
  }, [links])
}
