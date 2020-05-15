import { Dimensions } from 'react-native'

export const updateRootDimensions = (callback: (width: number, height: number) => void) => {
  callback(
    Dimensions.get('window').width,
    Dimensions.get('window').height
  )

  Dimensions.addEventListener('change', ({ window }) => {
    callback(
      window.width,
      window.height
    )
  })
}
