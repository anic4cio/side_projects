/* 
Enum ou enumerações são um tipo engraçado.
Esse tipo é algo como uma lista ou array,
mas com nomes em cada item.
E cada item guarda automaticamente um número,
começando com zero.
*/
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
};

let employeeStatus: ContractStatus = ContractStatus.Permanent;

console.log(employeeStatus); // 0
console.log(ContractStatus.Temp); // 1
console.log(ContractStatus.Apprentice); // 2

enum motorcycleRanking {
  BMWGS = 10,
  Tracer,
  S1000XR,
  Hayabusa,
  XT660,
  WR450,
  Versys,
  BlackBird,
  Fazer,
  Lander
}

let toDirtyTrack: motorcycleRanking = motorcycleRanking.WR450;

console.log(toDirtyTrack); // 15
console.log(motorcycleRanking[toDirtyTrack]); // WR450







