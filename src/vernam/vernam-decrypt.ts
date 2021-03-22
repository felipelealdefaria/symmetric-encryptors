import fs from 'fs'
import { codeToAscii } from './utils/code-to-ascii'
import { asciiToCode } from './utils/ascii-to-code'

export const vernamDecrypt = (text: string, key: string): void => {
  const arrDecrypt = asciiToCode(text, key)
  const decrypt = codeToAscii(arrDecrypt, key)

  fs.writeFile('texto-aberto.txt', decrypt, (err) => {
    if (err) return console.log(err)
  })
}
