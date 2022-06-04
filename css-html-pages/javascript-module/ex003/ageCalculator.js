function calculate() {
    let olderAge = document.getElementById('olderAge')
    let olderName = document.getElementById('olderName')
    let youngerAge = document.getElementById('youngerAge')
    let youngerName = document.getElementById('youngerName')
    let oldInfo = document.getElementById('oldInfo')
    let youngInfo = document.getElementById('youngInfo')
    let result = document.getElementById('result')
    let ageDiference = Number(olderAge.value) - Number(youngerAge.value)
    oldInfo.innerText = `Older person is ${olderAge.value} years old ${olderName.value}`
    youngInfo.innerText = `Younger person is ${youngerAge.value} years old ${youngerName.value}`
    result.innerText = `Diference between two ages: ${ageDiference}`
}



