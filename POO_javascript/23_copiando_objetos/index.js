 let person = {
     name: "Ariadna"
 };


 let person2 = {
    name: "Bruna",
    // A propriedade também pode ser substituída
    age: 22
 };

 console.log(person2);


 // .assign atribui as propriedades de um objeto para outro objeto
 Object.assign(person2, person);

 console.log(person)
 console.log(person2);