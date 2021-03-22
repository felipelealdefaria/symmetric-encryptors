import fs from 'fs'
import { decifra } from './decifra'

const file = fs.readFileSync(0, { encoding: 'utf-8' })

const decode = decifra(file)
const { textDecoded, key } = decode

const text = `Key: ${key} \nText Decoded: ${textDecoded}`

fs.writeFile('texto-aberto.txt', text, (err) => {
  if (err) return console.log(err)
})
