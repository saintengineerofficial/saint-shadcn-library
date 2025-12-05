import { useMemo } from 'react'

import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

export const useCurrentRange = (startTime: number, endTime: number, intervalDays = 30) => {


  return useMemo(() => {
    if (!startTime || !endTime) return null

    const start = dayjs.unix(startTime)
    const end = dayjs.unix(endTime)
    const ranges: { start: dayjs.Dayjs; end: dayjs.Dayjs }[] = []
    let currentStart = start

    while (currentStart.isBefore(end)) {
      const currentEnd = currentStart.add(intervalDays, 'day')
      ranges.push({
        start: currentStart,
        end: currentEnd.isBefore(end) ? currentEnd : end
      })
      currentStart = currentEnd
    }

    const now = dayjs()
    const found = ranges.find(
      r => now.isSameOrAfter(r.start) && now.isBefore(r.end)
    )

    if (!found) return null
    return {
      start: found.start.format('YYYY-MM-DD HH:mm:ss'),
      end: found.end.format('YYYY-MM-DD HH:mm:ss')
    }
  }, [startTime, endTime, intervalDays])
}
