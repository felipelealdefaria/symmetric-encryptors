import { alphabet } from './alphabet'

export const encode = (text: string, shift: number): string => {
  let i: number = 0
  let encodedText: string = ''

  while (i < text.length) {
    if (alphabet.indexOf(text[i]) !== -1) {
      const alphabetIndex: number = alphabet.indexOf((text[i]))

      if (alphabet[alphabetIndex + shift]) encodedText += alphabet[alphabetIndex + shift]

      if (shift >= 0) {
        if (!alphabet[alphabetIndex + shift]) encodedText += alphabet[(alphabetIndex + shift) - 62]
      } else {
        if (!alphabet[alphabetIndex + shift]) encodedText += alphabet[(alphabetIndex + shift) + 62]
      }
    } else {
      encodedText += text[i]
    }
    i++
  }
  return encodedText
}
