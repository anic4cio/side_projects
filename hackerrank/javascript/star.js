function star(n) {

    target = 0
    let space = ''

    for(let i = 1; i <= n; i++) {
        space += ' '
    }

    while(target < n) {
        space = space.substring(1)       
        space += '#'
        target += 1
        console.log(space)    
        
    }
}

star(30);

//  # 2
// ## 1
//### 0