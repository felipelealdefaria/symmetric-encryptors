import fs from 'fs'
import { codeToAscii } from './utils/code-to-ascii'
import { asciiToCode } from './utils/ascii-to-code'
import { VernamDecryptParams } from './utils/domain/vernam-decrypt'

export const vernamDecrypt = (params: VernamDecryptParams): void => {
  const { path, text, fileWrite, type, key } = params

  const arrDecrypt = asciiToCode(text, key)
  const decrypt = codeToAscii(arrDecrypt, key)
  console.log(`decrypt: ${decrypt} | length: ${decrypt.length}`)

  fs.writeFile(`${path}${fileWrite}`, decrypt, (err) => {
    console.log(`Type: ${type === '-d' ? 'DECRYPT' : 'ENCRYPT'} | Key: ${key}`)
    console.log('--------------------------------')
    if (err) return console.log(err)
    console.log(`The file was saved in src/vernam/tmp/${fileWrite}`)
  })
}
