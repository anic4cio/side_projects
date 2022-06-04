let spaceship = prompt('What is the ship name?') 
let warpAnswer = prompt('Do you wanna go to the warp?\n[1] - YES\n[2] - NOP\nNumber Only.')
warpCounter = 0

while(warpAnswer == "1") {
    warpCounter += 1
    warpAnswer = prompt('Do you wanna continue to the next warp?\n[1] - YES\n[2] - NOP')
    while (warpAnswer != "1" && warpAnswer != "2") {
        warpAnswer = prompt('Wrong Choice. Do you want to go to the next warp?\n[1] - YES\n[2] - NOP')
    }
}
alert(`Ship: ${spaceship}\nTotal warps done: ${warpCounter}`)
