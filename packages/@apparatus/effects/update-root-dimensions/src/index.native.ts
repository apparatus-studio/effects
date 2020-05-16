import { Dimensions, StatusBar } from 'react-native'

export const updateRootDimensions = (callback: (width: number, height: number) => void) => {
  callback(
    Dimensions.get('window').width,
    Dimensions.get('window').height - (StatusBar.currentHeight ?? 0)
  )

  Dimensions.addEventListener('change', ({ window }) => {
    callback(
      window.width,
      Dimensions.get('window').height - (StatusBar.currentHeight ?? 0)
    )
  })
}
