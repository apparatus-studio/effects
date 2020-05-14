export const getCurrentTimeInSeconds = (): number => (
  Math.floor(((new Date()).getTime()) / 1000)
)
