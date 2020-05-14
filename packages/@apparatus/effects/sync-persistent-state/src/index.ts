
export const saveState = <T>(state: T) => new Promise((resolve) => {
  resolve(
    window.localStorage.setItem('state', JSON.stringify(state))
  )
})

export const readState = () => new Promise((resolve) => {
  const stateString = window.localStorage.getItem('state')

  if (stateString != null) {
    try {
      resolve(JSON.parse(stateString))
    } catch (e) {
      resolve({})
    }
  }

  resolve({})
})
