export type TCallbackNewDay = (newDay: string) => void
export type TCallbackTimeZone = (timeZone: string) => void
export type TCallbackTimeZoneOffset = (timeZoneOffset: number) => void

export type TSubscriptionNewDay = {
  type: 'newDay',
  callback: TCallbackNewDay,
}

export type TSubscriptionTimeZone = {
  type: 'timeZone',
  callback: TCallbackTimeZone,
}

export type TSubscriptionTimeZoneOffset = {
  type: 'timeZoneOffset',
  callback: TCallbackTimeZoneOffset,
}

export type TSubscription =
  | TSubscriptionNewDay
  | TSubscriptionTimeZone
  | TSubscriptionTimeZoneOffset
