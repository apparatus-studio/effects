import { TCallbackTimeZone } from './types'

let currentTimeZone: string

export const pulseTimeZone = (callback: TCallbackTimeZone) => {
  const nextTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  if (currentTimeZone !== nextTimeZone) {
    callback(nextTimeZone)
    currentTimeZone = nextTimeZone
  }
}
