import { TCallbackTimeZoneOffset } from './types'

let currentTimeZoneOffset: number

export const pulseTimeZoneOffset = (callback: TCallbackTimeZoneOffset) => {
  const nextTimeZoneOffset = (new Date()).getTimezoneOffset() * 60

  if (currentTimeZoneOffset !== nextTimeZoneOffset) {
    callback(nextTimeZoneOffset)
    currentTimeZoneOffset = nextTimeZoneOffset
  }
}
