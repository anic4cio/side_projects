"use strict"

// No modo restrito, todas as variáveis devem ser declaradas. Caso contrário, erro.

const writeMyNameWithoutDeclaration = () => {
    name = 'Vinicius';
    console.log(name); 
}

writeMyNameWithoutDeclaration(); // ReferenceError: name is not defined

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const writeMyAgeInStrictMode = () => {
    let age = 24; 
    console.log(age);
}

writeMyAgeInStrictMode(); // 24
