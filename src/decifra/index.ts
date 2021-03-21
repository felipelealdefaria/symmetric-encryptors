import fs from 'fs'
import path from 'path'
import { decifra } from './decifra'

const fileText = process.argv[2]
const fileWrite = process.argv[3]

const pathRoot = process.cwd() + '/src/decifra/tmp/'

const filePath = path.isAbsolute(fileText) ? fileText : path.join(pathRoot, fileText)
const file = fs.readFileSync(filePath, { encoding: 'utf-8' })

const decode = decifra(file)
const { textDecoded, key } = decode

const text = `Key: ${key} \nText Decoded: ${textDecoded}`

fs.writeFile(`${pathRoot}${fileWrite}`, text, (err) => {
  if (err) return console.log(err)
  console.log(`The file was saved in src/decifra/tmp/${fileWrite}`)
})
