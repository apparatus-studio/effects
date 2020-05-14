import { Dimensions } from 'react-native'

export const updateRootDimensions = (callback: (width: number, height: number) => void) => {
  callback(
    Dimensions.get('screen').width,
    Dimensions.get('screen').height
  )

  Dimensions.addEventListener('change', ({ window }) => {
    callback(
      window.width,
      window.height
    )
  })
}
