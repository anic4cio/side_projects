const fs = require('fs')

const banns = fs.readFileSync('posted.json', 'utf8')
const arrayOfBanns = JSON.parse(banns)

const regexNacionalityAndWork = /(?=(Primeiro|Segundo)\(a\) nubente:.*?,.*?,)(.*?)(?=residente)/gm
const regexNacionality = /(?<=\s*nubente:\s*)(.*?)(?<=,)/gm
const regexWork = /(?<=: [a-zA-ZzáàâãéèêíïóôõöúçñZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+, )(.*)/gm
const address = /(no\(a\)\s*)(.*?)(\d{2}\/\d{2}\/\d{4}, )/g

const replaceFields = (arrayOfBanns) => {
  const newBanns = arrayOfBanns.map(bann => {
    const teor = bann.meta.teor.replaceAll(/[\r\n]/gm, '').replaceAll(/  +/gm, ' ')
    const fieldNacionalityAndWork = teor.match(regexNacionalityAndWork)[0]
    const fieldNacionalityAndWork2 = teor.match(regexNacionalityAndWork)[1]
    const withoutNationality = fieldNacionalityAndWork.replaceAll(regexNacionality, '')
    const withoutNationality2 = fieldNacionalityAndWork2.replaceAll(regexNacionality, '')
    const removedWork = withoutNationality.replaceAll(regexWork, '')
    const removedWork2 = withoutNationality2.replaceAll(regexWork, '')
    const finalField = teor.replaceAll(fieldNacionalityAndWork, removedWork)
    const finalField2 = finalField.replaceAll(fieldNacionalityAndWork2, removedWork2)
    const newTeor = finalField2.replaceAll(address, '')
    return newTeor
  })
  return newBanns
}

const newArrayOfBanns = arrayOfBanns => {
  const newTeorField = replaceFields(arrayOfBanns)
  for (let i = 0; i < arrayOfBanns.length; i++) {
    arrayOfBanns[i].meta.teor = newTeorField[i]
  }
  return arrayOfBanns
}

const a = newArrayOfBanns(arrayOfBanns)
const jsonBuffer = Buffer.from(JSON.stringify(a))
fs.writeFileSync('newPosts.json', jsonBuffer)