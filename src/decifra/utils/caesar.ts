import { getMaxFrequency } from './'
import { Frequency, MaxFrequency } from './domain/frequency'

export const caesarDecryptKey = (letterFrequency: Frequency): number => {
  const maxFrequency: MaxFrequency = getMaxFrequency(letterFrequency)
  return maxFrequency.index - 0
}
