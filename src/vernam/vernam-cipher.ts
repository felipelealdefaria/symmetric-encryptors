import fs from 'fs'
import { generateKey } from './utils/generateKey'
import { codeToAscii } from './utils/code-to-ascii'
import { asciiToCode } from './utils/ascii-to-code'

export const vernamCipher = (text: string): void => {
  const key = generateKey(text.length)

  fs.writeFile('chave.dat', key, (err) => {
    if (err) return console.log(err)
  })

  const arr = asciiToCode(text, key)
  const cipher = codeToAscii(arr)

  fs.writeFile(1, cipher, (err) => {
    if (err) return console.log(err)
  })
}
