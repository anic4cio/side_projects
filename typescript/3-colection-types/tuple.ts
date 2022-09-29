let plane: [string, boolean, number, string];
plane = ['Boeing', true, 7, 'Flying'];

console.log(plane); // [ 'Boeing', true, 7, 'Flying' ]

var obj: { readonly name: string } = { name : ''};

console.log(obj); // { name: ''}

const changing = (obj: { name: string }) => {
    obj.name = 'Someone\'s name';
};

changing(obj);

console.log(obj); // { name: "Someone's name" }
