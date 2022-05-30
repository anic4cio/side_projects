class Car {
    constructor(company, price, color, rim) {
        this.company = company;
        this.price = price;
        this.color = color;
        this.rim = rim;
    }
}

let fusca = new Car('Fusca', 1000, 'red', 20);

for(i in fusca) {
    console.log(`${i} = ${fusca[i]}`)
}