import { cesar } from '../cesar/caesar'
import { Frequency, DecodeResponse } from './utils/domain'
import { alphabet, frequencyAnalysis, caesarDecryptKey } from './utils'

export const decifra = (text: string): DecodeResponse => {
  let i: number = 0
  const formatText = text.toUpperCase()
  const letterFrequency: Frequency = {}

  while (i < alphabet.length) {
    const letter = alphabet[i]
    letterFrequency[letter] = { frequency: 0, percentage: '0' }
    i++
  }

  const frequency: Frequency = frequencyAnalysis(formatText, letterFrequency)
  console.log('Frequency each letter:')
  console.log(frequency)
  console.log('------------------------------------------------------------')
  const key = caesarDecryptKey(frequency)
  const textDecoded = cesar(text, key, '-d')
  return { textDecoded, key }
}
