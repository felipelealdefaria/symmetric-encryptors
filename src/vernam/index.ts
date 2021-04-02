import fs from 'fs'
import path from 'path'
import { vernamCipher } from './vernam-cipher'
import { vernamDecrypt } from './vernam-decrypt'

const type = process.argv[2]
const fileDat = process.argv[3]

const pathRoot = process.cwd() + '/'

const file = fs.readFileSync(0, { encoding: 'utf-8' })

if (type === '-d') {
  const fileKeyPath = path.isAbsolute(fileDat) ? fileDat : path.join(pathRoot, fileDat)
  const fileKey = fs.readFileSync(fileKeyPath, { encoding: 'utf-8' })

  vernamDecrypt(file, fileKey)
}

if (type !== '-d') vernamCipher(file)
