/*
Return lowest number along width from index in subarray of cases
Exemple: cases[0] = [0, 3]
Return lowest number in width from index 0 until 3 ot this:
[2, 3, 1, 2] - lowest value is 1
*/

const serviceLane = (width: number[], cases: number[][]): number[] => {
  let caseArr: number[] = [];
  let output: number[] = []
  for (let i = 0; i < cases.length; i++) {
    caseArr = width.slice(cases[i][0], cases[i][1]+1)
    output.push(Math.min(...caseArr))
  }
  return output
}

const width = [2, 3, 1, 2, 3, 2, 3, 3]
const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

console.log(serviceLane(width, cases));