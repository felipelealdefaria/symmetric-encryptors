export const codeToAscii = (arr: number[], key: string): string => {
  let i: number = 0
  let cipher: string = ''

  while (i < arr.length) {
    // CONVERT CODE ASCII TO CHAR ASCII
    cipher += String.fromCharCode(arr[i])
    i++
  }

  return cipher
}
