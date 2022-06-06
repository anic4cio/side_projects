function voidTest(): void {
    console.log('It is working out that I do?')
}

voidTest();

let test: void;
test = undefined;

console.log(test); // undefined

// Só aceita dados undefined, geralmente usado em funções