import { alphabet } from './'
import { Frequency, MaxFrequency } from './domain/frequency'

export const getMaxFrequency = (letterFrequency: Frequency): MaxFrequency => {
  let i: number = 0
  let max: number = 0
  let freq: number = 0
  let index: number = 0
  let letter: string = ''

  while (i < alphabet.length) {
    const currentLetter: string = alphabet[i]
    freq = letterFrequency[currentLetter].frequency
    if (freq > max) {
      index = i
      max = freq
      letter = currentLetter
    }
    i++
  }

  return { index, letter, max }
}
