let total = function (input: number[]): number {
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

const totalRefatored = (input: number[]) => {
    let total: number = 0;
    for (let i in input) {
        total += input[i];
    }
    return total;
}

console.log(total([1, 2, 3, 4]));               // 10
console.log(totalRefatored([1, 2, 3, 4]));      // 10
console.log(total([1, 'two', 3]))               // 4 - (this return is result from isNaN() validation)

// OPTIONAL PARAMETERS

const option = (
    prefix: string,
    guestName: string,
    guestLastName: string,
    optName: boolean,
    guestNickName?: string,
) => {
    if (optName === false && !guestNickName) {
        console.log(`Salute, ${prefix} ${guestName} ${guestLastName}`)
    } else if (optName === true && guestNickName) {
        console.log(`Salute, ${prefix} ${guestName} ${guestNickName} ${guestLastName}`)
    } else {
        console.log(`Invalid choice, ${prefix} ${guestName} ${guestLastName}`)
    }
}

option('Mr.', 'Vinicius', 'Anicácio', false,);

// DEFAULT PARAMETERS

const multiTable = (index: number = 10) => {
    const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i of multipliers) {
        console.log(`${index} x ${i} = ${i * index}`)
    }
}

multiTable();
