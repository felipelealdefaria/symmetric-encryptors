import { encode, decode, removeAccents } from './utils'

export const cesar = (text: string, k: number, type: string): string => {
  if (!k) k = 0
  if (k > 62) k = k % 62
  if (k < -62) k = k % -62

  let cript: string = text
  const textFormated: string = removeAccents(text)
  console.log('removeAccents: ', textFormated)

  if (type === 'd') cript = decode(textFormated, k)
  if (type !== 'd') cript = encode(textFormated, k)

  return cript
}
