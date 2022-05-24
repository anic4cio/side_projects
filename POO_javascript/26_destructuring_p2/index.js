let phone = {
    corporation: 'xiaomi',
    year: 2020,
    color: 'black',
    inch: 7
}
// copiar propriedades de um objeto

console.log(phone)

let corporation = 'nextel';
console.log(corporation);

({corporation} = phone);
// a variável let corporation recebe o valor da propriedade corporarion do objeto phone
console.log(corporation);


let color = 'blue';
console.log(color);

({color} = phone);

console.log(color);

