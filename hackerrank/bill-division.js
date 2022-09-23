function bonAppetit(bill, k, b) {
    let anaArr = bill.slice()
    anaArr.splice(k, 1)

    let anaPayment = anaArr.reduce((tot, value) => {
        return tot + value
    })

    let refund = b - (anaPayment / 2) 

    if(refund != 0) {
        console.log(refund)
    } else {
        console.log('Bon Appetit')
    }    
};


let conta = [3, 10, 2, 9];
let notEat = 1;
let total = 7;

console.log(bonAppetit(conta, notEat, total));
