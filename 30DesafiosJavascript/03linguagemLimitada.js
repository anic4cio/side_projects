function arrayReverse(array) {
    var reverse = [];
    for (value of array) {
        reverse.unshift(value);
    }
    return console.log(reverse);
}

arrayReverse([0, 9, 6, 8, 9, 1, 5, 7]);
arrayReverse(['Oh', 'Hi', 'Mark']);
arrayReverse([false, true, true, true]);
arrayReverse(["It's", "not", true, 0]);