function carStats(brand: string, rims?: number) {
    if(rims) {
        console.log(`${brand} vehicle brand with ${rims}' rims size.`);
    } else {
        console.log(`Brand of vehicle: ${brand}.`);
    }
}

// funcão com passagem de parâmetro opcional

console.log(carStats('Porsche', 20)); // Porsche vehicle brand with 20' rims size.
console.log(carStats('Alfa Romeo')); // Brand of vehicle: Alfa Romeo.