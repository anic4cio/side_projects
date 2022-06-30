function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let totApple = 0;
    apples.forEach((apple) => {
        if((apple + a) >= s && (apple + a) <= t) {
            totApple++;
        }
    });

    let totOrange = 0;
    oranges.forEach((orange) => {
        if((orange + b) >= s && (orange + b) <= t) {
            totOrange++;
        }
    })
    console.log(totApple);
    console.log(totOrange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);