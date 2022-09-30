const stack: number[] = []; 

// Uma fila (brasileiros amam), o primeiro a entrar na fila, é o primeiro a ser executado
// unshift adiciona o element no começo do array

stack.unshift(1); // [1]
stack.unshift(45); // [45, 1]
stack.unshift(3); // [3, 45, 1]
stack.unshift(2); // [2, 3, 45, 1]

console.log(stack); // [2, 3, 45, 1]

stack.pop(); // [2, 3, 45]
stack.pop(); // [2, 3]
stack.pop();

const element = stack.pop();
// É possivel remover um item da fila e atribuí-lo a uma variável

console.log(element); // 1