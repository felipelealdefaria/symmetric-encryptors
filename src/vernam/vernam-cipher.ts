import fs from 'fs'
import { generateKey } from './utils/generateKey'
import { codeToAscii } from './utils/code-to-ascii'
import { asciiToCode } from './utils/ascii-to-code'
import { VernamCipherParams } from './utils/domain/vernam-cipher'

export const vernamCipher = (params: VernamCipherParams): void => {
  const { path, text, files, type } = params
  const { fileDat, fileWrite } = files

  const key = generateKey(text.length)
  console.log(`key: ${key} | length: ${key.length}`)

  fs.writeFile(`${path}${fileDat}`, key, (err) => {
    console.log(`Type: ${type === '-d' ? 'DECRYPT' : 'ENCRYPT'} | Key: ${key}`)
    console.log('--------------------------------')
    if (err) return console.log(err)
    console.log(`The file was saved in src/vernam/tmp/${fileDat}`)
  })

  const arr = asciiToCode(text, key)
  const cipher = codeToAscii(arr, key)

  console.log(`crypt: ${cipher} | length: ${cipher.length}`)
  fs.writeFile(`${path}${fileWrite}`, cipher, (err) => {
    if (err) return console.log(err)
    console.log(`The file was saved in src/vernam/tmp/${fileWrite}`)
  })
}
