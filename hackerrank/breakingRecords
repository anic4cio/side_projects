function breakingRecords(scores) {

    let maxScore = scores[0];
    let minScore = scores[0];

    let countMax = 0;
    let countMin = 0;

    scores.forEach((element) => {
        if(maxScore < element) {
            maxScore = element
            countMax += 1
        } else if(minScore > element) {
            minScore = element
            countMin += 1
        }
    })

    return `${countMax} ${countMin}`
}

// score = [10,5,20,20,4,5,2,25,1];
score = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

console.log(breakingRecords(score));