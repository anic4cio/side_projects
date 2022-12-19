const fs = require('fs')

const banns = fs.readFileSync('posted.json', 'utf8')
const arrayOfBanns = JSON.parse(banns)

const regexNacionalityAndWork = /(?=(Primeiro|Segundo)\(a\) nubente:.*?,.*?,)(.*?)(?=residente)/gm
const regexNacionality = /(?<=\s*nubente:\s*)(.*?)(?<=,)/gm
const regexWork = /(?<=: [a-zA-ZzáàâãéèêíïóôõöúçñZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+, )(.*)/gm
const address = /(no\(a\)\s*)(.*?)(\d{2}\/\d{2}\/\d{4}, )/g

const replaceFields = (arrayOfBanns) => {
  const newBanns = arrayOfBanns.map(bann => {
    const newTeor = bann.meta.teor.replaceAll(/[\r\n]/gm, '').replaceAll(/  +/gm, ' ')
    const fieldNacionalityAndWork = newTeor.match(regexNacionalityAndWork)[0]
    const fieldNacionalityAndWork2 = newTeor.match(regexNacionalityAndWork)[1]
    const withoutNationality = fieldNacionalityAndWork.replaceAll(regexNacionality, '')
    const withoutNationality2 = fieldNacionalityAndWork2.replaceAll(regexNacionality, '')
    const removedWork = withoutNationality.replaceAll(regexWork, '')
    const removedWork2 = withoutNationality2.replaceAll(regexWork, '')
    const finalField = newTeor.replaceAll(fieldNacionalityAndWork, removedWork)
    const finalField2 = finalField.replaceAll(fieldNacionalityAndWork2, removedWork2)
    console.log(finalField2.replaceAll(address, ''), '\n')
    // return 
  })
  return newBanns
}

const oneTime = replaceFields(arrayOfBanns)
// console.log(oneTime)
