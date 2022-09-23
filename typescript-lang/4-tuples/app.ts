let plane: [string, boolean, number, string];
plane = ['Boeing', true, 7, 'Flying'];
console.log(plane);

var obj: { readonly name: string } = { name : ''};
function changing(obj: { name: string }) {
    obj.name = 'Someone\'s Name';
};

changing(obj);
console.log(obj);
