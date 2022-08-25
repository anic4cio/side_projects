function hurdleRace(k, height) {
    let maxHeightObstacles = Math.max(...height);
    if(k >= maxHeightObstacles) {
        return 0
    } else {
        return maxHeightObstacles - k
    }
}

k = 4;
height = [1, 6, 3, 5, 2];

console.log(hurdleRace(k, height));