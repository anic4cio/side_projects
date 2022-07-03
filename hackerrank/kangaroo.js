function kangaroo (x1, v1, x2, v2) {
    let jumps = 0;
    let result
    while (jumps <= 10000) {
        x1 += v1
        x2 += v2
        if(x1 == x2) {
            result = 'YES'
            break
        } else {
            result = 'NO'
        }
        jumps++
    }
    console.log(result);
}

kangaroo(0,3,4,2);