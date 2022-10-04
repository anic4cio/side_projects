const angryProfessor = (k: number, a: number[]): string => {
  let early: number = 0; 
  a.forEach(element => {
    if(element <= 0) {
      early += 1
    }
  })
  return early >= k ? 'NO' : 'YES'
}

const threshold: number = 3;
const students: number[] = [-1, -3, 4, 2];

const threshold2: number = 2;
const students2: number[] = [0, -1, 2, 1];


console.log(angryProfessor(threshold, students));
console.log(angryProfessor(threshold2, students2));