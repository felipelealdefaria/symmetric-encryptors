export interface Frequency {
  [key: string]: {
    frequency: number
    percentage: string
  }
}

export interface MaxFrequency {
  index: number
  letter: string
  max: number
}
