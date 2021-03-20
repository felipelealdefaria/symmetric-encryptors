import fs from 'fs'
import path from 'path'
import { decifra } from './decifra'

const fileText = process.argv[2]

const filePath = path.isAbsolute(fileText) ? fileText : path.join(__dirname, fileText)
const file = fs.readFileSync(filePath, { encoding: 'utf-8' })

const encript = decifra(file)
const { textDecoded, key } = encript

fs.writeFile('tmp/texto-aberto.txt', textDecoded, (err) => {
  if (err) return console.log(err)
  console.log('The file was saved in tmp/text-aberto.txt')
})
