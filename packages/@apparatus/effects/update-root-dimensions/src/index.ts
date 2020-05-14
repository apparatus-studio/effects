export const updateRootDimensions = (callback: (width: number, height: number) => void) => {
  callback(
    window.innerWidth,
    window.innerHeight
  )

  window.addEventListener('resize', () => {
    callback(
      window.innerWidth,
      window.innerHeight
    )
  })
}
