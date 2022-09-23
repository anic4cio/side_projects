function bonAppetit(bill, k, b) {
    bill.splice(k, 1)

    let anaPayment = bill.reduce((tot, val) => tot + val);
    let refund = b - (anaPayment / 2);

    if(refund != 0) {
        console.log(refund);
    } else console.log('Bon Appetit');
};


let conta = [3, 10, 2, 9];
let notEat = 1;
let total = 7;
// let total = 12;

bonAppetit(conta, notEat, total);
