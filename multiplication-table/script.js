function calculate() {
    var num = document.getElementById('txtn')
    var mult = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Please, insert a number.')
    } else {
        var n = Number(num.value)
        var cont = 1
        mult.innerHTML = ''
        while (cont <= 10) {
            var item = document.createElement('option')           
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `mult${cont}`
            mult.appendChild(item)
            cont++
        }    
    }
}