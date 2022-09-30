const stack = []; 

// Imagina uma pilha de pratos, onde você coloca um em cima do outro.
// Para remover um prato da pilha, deve ser sempre o prato de cima

stack.push(1); // [1]
stack.push(45); // [1, 45]
stack.push(3); // [1, 45, 3]
stack.push(2); // [1, 45, 3, 2]

console.log(stack); // [1, 45, 3, 2]

stack.pop(); // [1, 45, 3]
stack.pop(); // [1, 45]
stack.pop();

const element = stack.pop();
// É possivel remover um item da pilha e atribuí-lo a uma variável

console.log(element); // 1