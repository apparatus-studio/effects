import { TSubscription } from './types'
import { pulse } from './pulse'

const subscriptions: TSubscription[] = []

export const getSubscriptions = () => subscriptions

export const subscribe = (subscription: TSubscription) => {
  const index = subscriptions.length

  subscriptions.push(subscription)
  pulse()

  return () => subscriptions.splice(index, 1)
}

