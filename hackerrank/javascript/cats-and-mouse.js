const catAndMouse = (x, y, z) => {

  let catA = x > z ? x - z : z - x;
  let catB = y > z ? y - z : z - y;

  if(catA < catB) return 'Cat A'
  if(catA > catB) return 'Cat B'
  if(catA === catB) return 'Mouse C'
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));