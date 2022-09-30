interface IceCream {
  flavor: string,
  scoops: number
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'strawberry' | 'caramel'
  nuts?: boolean,
  WhippedCream?: boolean,
  instructions?: string
}

const scoopsQty = (dessert: Sundae) => {
  if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
  } else {
      return 'Your order will be ready soon!';
  }
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 5,
  sauce: 'caramel',
  nuts: true
}

console.log(scoopsQty(myIceCream));