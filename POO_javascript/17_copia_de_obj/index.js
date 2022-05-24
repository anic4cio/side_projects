let obj = {
    number: 1
}

console.log(obj.number);

let copy = obj;

copy.number = 2;

console.log(obj.number);

// Não é possível copiar objetos atribuindo o própio objeto para uma váriavel
// Isso transformará a variável uma uma outra referencia pra o objeto 
// Ao alterar uma proprieade da cópia, também se alera o proprio objeto