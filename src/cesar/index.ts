import fs from 'fs'
import path from 'path'
import { cesar } from './caesar'

const type = process.argv[2]
const k = process.argv[3]
const fileText = process.argv[4]

const filePath = path.isAbsolute(fileText) ? fileText : path.join(__dirname, fileText)
const file = fs.readFileSync(filePath, { encoding: 'utf-8' })

const key = Number.parseInt(k)
let filename = 'texto-cifrado'
if (type === 'd') filename = 'texto-aberto'

const encript = cesar(file, key, type)

fs.writeFile(`tmp/${filename}.txt`, encript, (err) => {
  if (err) return console.log(err)
  console.log(`The file was saved in tmp/${filename}.txt`)
})
