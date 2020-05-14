import { Linking } from 'react-native'

export const openLink = async (url: string) => {
  await Linking.openURL(url)
}
