function Ninja(name, weapon) {
   this.name = name;
   this.weapon = weapon;
}

const naruto = new Ninja('Naruto', 'shuriken');
const rocklee = new Ninja('Rock Lee', 'hands');
const narutoClone = new Ninja('Naruto', 'shuriken');

const realNarutoClone = naruto;

console.log(naruto === rocklee);
console.log(naruto === narutoClone);
console.log(naruto === realNarutoClone);
