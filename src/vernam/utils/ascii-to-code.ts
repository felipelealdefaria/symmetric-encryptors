export const asciiToCode = (text: string, key: string): number[] => {
  let i = 0
  const arrCode: number[] = []

  while (i < key.length) {
    // XOR BETWEEN ASCII CODE
    arrCode[i] = text.charCodeAt(i) ^ key.charCodeAt(i)
    i++
  }

  return arrCode
}
