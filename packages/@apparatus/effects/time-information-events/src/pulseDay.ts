import { getCurrentTimeInSeconds } from '@apparatus/effects-get-current-time-in-seconds'
import { formatISO9075, fromUnixTime } from 'date-fns'
import { TCallbackNewDay } from './types'

let currentDay: string

// Time zone and time offset match automatically the currenct device configuration
// Maybe that is information that should be passed down manually. Maybe
export const pulseDay = (callback: TCallbackNewDay) => {
  const nextDay = formatISO9075(
    fromUnixTime(getCurrentTimeInSeconds()),
    { representation: 'date' }
  )

  if (currentDay !== nextDay) {
    callback(nextDay)
    currentDay = nextDay
  }
}
