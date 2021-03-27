import fs from 'fs'
import { cesar } from './caesar'

const k = process.argv[4]
const type = process.argv[2]

const file = fs.readFileSync(0, { encoding: 'utf-8' })

const key = Number.parseInt(k)
const encript = cesar(file, key, type)

fs.writeFile(1, encript, (err) => {
  if (err) return console.log(err)
})
