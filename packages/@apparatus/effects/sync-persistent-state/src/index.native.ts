import AsyncStorage from '@react-native-community/async-storage'

export const saveState = async <T>(state: T) => {
  try {
    await AsyncStorage.setItem('state', JSON.stringify(state))
  } catch (e) {}
}

export const readState = async () => {
  try {
    const stateString = await AsyncStorage.getItem('state')

    if (stateString != null) {
      try {
        return JSON.parse(stateString)
      } catch (e) {
        return {}
      }
    }

    return {}
  } catch (e) {
    return {}
  }
}
