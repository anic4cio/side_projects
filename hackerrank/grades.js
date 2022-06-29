function grades(grades) {

    let newGrade = [];

    grades.forEach((element) => {
        if(element % 5 >= 3 && element > 37) {
            newGrade.push(element + (5 - (element % 5)));        
        } else {
            newGrade.push(element)
        }
    });

    return newGrade
}

arr = [74, 67, 38, 33]; // [ 75, 67, 40, 33 ]

console.log(grades(arr));