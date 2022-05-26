let date = new Date(); 

console.log(date); // Data atual

console.log(date.setMonth(0)); // retorna a data em milisegundos

console.log(new Date(date.setMonth(0))) // altera a data para o formato padrão novamente

console.log(Date.now()); // data atual em milisegundos

console.log(new Date(Date.now())); // data atual formatada

console.log(Date.parse(new Date(date.setMonth(0)))); // 