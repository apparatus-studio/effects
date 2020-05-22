import { pulseDay } from './pulseDay'
import { pulseTimeZone } from './pulseTimeZone'
import { pulseTimeZoneOffset } from './pulseTimeZoneOffset'
import { getSubscriptions } from './subscriptions'

let pulseId: ReturnType<typeof setInterval>

export const pulse = () => {
  const subscriptions = getSubscriptions()

  if (subscriptions.length > 0 && pulseId === undefined) {
    pulseId = setInterval(pulse, 1000)
  }

  if (subscriptions.length === 0) {
    return clearTimeout(pulseId)
  }

  subscriptions.forEach((sub) => {
    switch (sub.type) {
      case 'newDay': {
        pulseDay(sub.callback)

        break
      }

      case 'timeZone': {
        pulseTimeZone(sub.callback)

        break
      }

      case 'timeZoneOffset': {
        pulseTimeZoneOffset(sub.callback)

        break
      }
    }
  })
}
