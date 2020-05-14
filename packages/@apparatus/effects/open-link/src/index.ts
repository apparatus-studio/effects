export const openLink = async (url: string) => {
  await new Promise((resolve) => {
    resolve(window.open(url))
  })
}
