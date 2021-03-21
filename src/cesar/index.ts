import fs from 'fs'
import path from 'path'
import { cesar } from './caesar'

const type = process.argv[2]
const k = process.argv[4]
const fileText = process.argv[5]
const fileWrite = process.argv[6]

const pathRoot = process.cwd() + '/src/cesar/tmp/'
const pathFrequency = process.cwd() + '/src/decifra/tmp/'

const filePath = path.isAbsolute(fileText) ? fileText : path.join(pathRoot, fileText)
const file = fs.readFileSync(filePath, { encoding: 'utf-8' })

const key = Number.parseInt(k)

const encript = cesar(file, key, type)

fs.writeFile(`${pathRoot}${fileWrite}`, encript, (err) => {
  console.log(`Type: ${type === '-d' ? 'DECRYPT' : 'ENCRYPT'} | Key: ${key}`)
  console.log('--------------------------------')
  if (err) return console.log(err)
  console.log(`The file was saved in src/cesar/tmp/${fileWrite}`)
})

fs.writeFile(`${pathFrequency}${fileWrite}`, encript, (err) => {
  if (err) return console.log(err)
  console.log(`The file was saved in src/decifra/tmp/${fileWrite}`)
})
