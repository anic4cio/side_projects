const catAndMouse = (x, y, z) => {
  const catA = Math.abs(x);
  const catB = Math.abs(y)
  const mouseC = Math.abs(z);

  if(Math.abs(mouseC - catB) === Math.abs(mouseC - catA)) {
    console.log('Mouse C');

  } else if(mouseC - catB > mouseC - catA) {

    console.log('Cat B')
  } else {
    
    console.log('Cat A')
  }
}


const catA = 1;
const catB = 2;
const mouseC = 3;

catAndMouse(catA, catB, mouseC);