import { Keyboard } from 'react-native'
import { TUpdateKeyboardStatus } from './types'

export const updateKeyboardStatus: TUpdateKeyboardStatus = (callback: (open: boolean, width: number, height: number) => void) => {
  callback(
    false,
    0,
    0
  )

  Keyboard.addListener('keyboardDidShow', ({ endCoordinates: { height, width } }) => {
    callback(
      true,
      width,
      height
    )
  })

  Keyboard.addListener('keyboardDidHide', () => {
    callback(
      false,
      0,
      0
    )
  })
}
