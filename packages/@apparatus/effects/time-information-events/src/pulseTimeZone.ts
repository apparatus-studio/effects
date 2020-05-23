import { getTimeZone } from 'react-native-localize'
import { TCallbackTimeZone } from './types'

let currentTimeZone: string

export const pulseTimeZone = (callback: TCallbackTimeZone) => {
  const nextTimeZone = getTimeZone()

  if (currentTimeZone !== nextTimeZone) {
    callback(nextTimeZone)
    currentTimeZone = nextTimeZone
  }
}
