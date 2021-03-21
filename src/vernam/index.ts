import fs from 'fs'
import path from 'path'
import { vernamCipher } from './vernam-cipher'
import { vernamDecrypt } from './vernam-decrypt'

const type = process.argv[2]
const fileDat = process.argv[3]
const fileText = process.argv[4]
const fileWrite = process.argv[5]

const pathRoot = process.cwd() + '/src/vernam/tmp/'

const filePath = path.isAbsolute(fileText) ? fileText : path.join(pathRoot, fileText)
const file = fs.readFileSync(filePath, { encoding: 'utf-8' })

if (type === '-d') {
  const fileKeyPath = path.isAbsolute(fileDat) ? fileDat : path.join(pathRoot, fileDat)
  const fileKey = fs.readFileSync(fileKeyPath, { encoding: 'utf-8' })

  vernamDecrypt({
    type: type,
    path: pathRoot,
    text: file,
    key: fileKey,
    fileWrite: fileWrite
  })
}

if (type !== '-d') {
  vernamCipher({
    type: type,
    path: pathRoot,
    text: file,
    files: {
      fileDat: fileDat,
      fileWrite: fileWrite
    }
  })
}
