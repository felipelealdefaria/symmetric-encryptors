import { encode } from './encode'

export const decode = (text: string, shift: number): string => encode(text, shift * -1)
