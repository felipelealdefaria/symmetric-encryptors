import { generateKey } from './utils/generateKey'
import { codeToAscii } from './utils/code-to-ascii'
import { asciiToCode } from './utils/ascii-to-code'

const text = 'Olá você, FUJA para as colinas!'
console.log(`text: ${text} | length: ${text.length}`)

const key = generateKey(text.length)
console.log(`key: ${key} | length: ${key.length}`)

const arr = asciiToCode(text, key)
const cipher = codeToAscii(arr, key)
console.log(`crypt: ${cipher} | length: ${cipher.length}`)

const arrDecrypt = asciiToCode(cipher, key)
const decrypt = codeToAscii(arrDecrypt, key)
console.log(`decrypt: ${decrypt} | length: ${decrypt.length}`)
