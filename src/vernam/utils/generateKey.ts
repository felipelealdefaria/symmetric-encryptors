export const generateKey = (length: number): string => {
  let i: number = 0
  let key: string = ''

  while (i < length) {
    key += Math.floor(Math.random() * (9 - 0) + 0)
    i++
  }

  return key
}
