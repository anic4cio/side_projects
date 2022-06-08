// nome

// chamando no terminal node ./index.js nome=Vinicius idade=22
console.log(process.argv);

/*[
    '/usr/bin/node',
    '/media/anic4cio/D2A8249BA8247FD9/projects/side_projects/nodejs/2-fundamentos/4-ler-argumentos/index.js',
    'nome=Vinicius'
  ]*/
const args = process.argv.slice(2);

console.log(args); // [ 'nome=Vinicius', 'idade=22' ]

const nome = args[0].split('=')[1];

console.log(nome); // Vinicius


const idade = args[1].split('=')[1]; 

console.log(idade); // 22

console.log(`${nome} tem ${idade} anos`) // Vinicius tem 22 anos