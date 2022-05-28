function averageCalculate(...numbers) {
    // var sum = 0;
        
    // for (var x of numbers) {
    //     var sum = sum + x;    
    // }

    // Método usando forEach - Para cada "number" em "numbers", faça linha 9
    // numbers.forEach(number => { 
    //     sum += number
    // });

    // Método reduce = 1° parâmetro - acumulador / 2° parâmetro - número inicial do acumulador
    const sum = numbers.reduce((accum, number) => accum + number, 0)
    return console.log(`Average: ${sum / numbers.length}`)
}

averageCalculate(10, 9, 6, 8, 9, 1, 5, 7); // 6.875
averageCalculate(2, 5, 7, 1, -2); // 2.6
averageCalculate(10, 10, 10, 10, 9); // 9.8
averageCalculate(25, 75); // 50


