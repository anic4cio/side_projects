function confirm() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.lengh == 0 || fyear.value > year) {
        alert('Error! Confirm the information and try again.')
    } else {
         var fsex = document.getElementsByName('radgender')
         var age = year - Number(fyear.value)
         var gender = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
             gender = 'man'
             if (age >= 0 && age < 10) {
                 img.setAttribute('src', 'foto-bebe-m.png')
             } else if (age < 21) {
                 img.setAttribute('src', 'foto-jovem-m.png')
             } else if (age < 50) {
                 img.setAttribute('src', 'foto-adulto-m.png')
             } else {
                img.setAttribute('src', 'foto-idoso-m.png')
             }
         } else if (fsex[1].checked) {
             gender = 'woman'
             if (age >= 0 && age < 10) {
                img.setAttribute('src','foto-bebe-f.png')
            } else if (age < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (age < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detect ${gender} with ${age} years old.`
         res.appendChild(img)
    }
}