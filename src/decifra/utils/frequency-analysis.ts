import { alphabet } from './alphabet'
import { Frequency } from './domain/frequency'

export const frequencyAnalysis = (text: string, letterFrequency: Frequency): Frequency => {
  let i: number = 0
  let x: number = 0

  while (i < text.length) {
    const currentLetter = text[i]
    if (alphabet.includes(currentLetter)) letterFrequency[currentLetter].frequency += 1
    i++
  }

  while (x < alphabet.length) {
    const currentLetter = alphabet[x]
    const textSize: number = text.length
    const frequency = letterFrequency[currentLetter].frequency
    const percentage = (frequency * 100) / textSize
    letterFrequency[currentLetter].percentage = percentage.toFixed(2)
    x++
  }

  return letterFrequency
}
