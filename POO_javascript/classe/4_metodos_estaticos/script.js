class Motorcycle {
    static model(brand, model, cc) {
        console.log(`${brand}: ${model} ${cc}`);
    }
}

Motorcycle.model('Honda', 'CB', 500);
Motorcycle.model('Yamaha', 'WR', 450);
Motorcycle.model('BMW', 'S', 1000);
Motorcycle.model('Kawasaki', 'Versys', 300);
