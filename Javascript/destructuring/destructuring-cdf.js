// mais uma vez o conceito de desestruturação no Javascript, que é pegar partes de uma variável
// geralmente um objeto ou array

const programing = {
    name: 'The Art of Programing',
    id: 'DFRsdf5Sd68Fa6v8Lor3mvVvcx4aq',
    sub: 500000,
    type: 'work',
    modal: true,
    link: 'https://github.com/anic4cio',
    amount: 1,
    side: 'sideless',
    status: 'improving'
};

// desestruturação na prática
const {name, id, sub, type, modal, link, amount, side, status} = programing;
console.log(`${name} -> ${link}`)

// desestruturando e renomeando
const {name: nome, type: tipo, side: lado} = programing
console.log(`${nome} - ${tipo} - ${lado}`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const bike = {
    brand: 'Caloi',
    wheel: {
        tire: 'continental',
        rim: 'carbon',
        bearing: {
            component: 'aluminium',
            type: 'Spherical roller',
        }
    }
}

// método para pegar informações aninhadas, não achei outra forma
const {wheel: {bearing: {component}}} = bike;
console.log(component); // aliminium


// método para verificar se um campo existe e atribuir ou não o seu valor
const {brand: marca = 'sem marca'} = bike;
// se "brand" existir, printa caloi. Se não, printa "sem marca"
console.log(marca);


// usando o operador ...rest no contexto de destructuring
const {brand, wheel: {tire}, ...rest} = bike;
console.log(brand); // Caloi
console.log(tire); // continental
console.log(rest); // {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// com esses exemplos, atribuir um valor de um objeto usando desestructuring parece verboso demais
// mas em situações mais complexas, com dezenas de chaves aninhadas, pode fazer sentido
let bearingType = ({wheel: {bearing: {type}}}) => {
    return type;
};

const typeOfBearing = bearingType(bike);
console.log(`Bearing type: ${typeOfBearing}`);

// método simples para uma atibuição simples
console.log(`Tipo de rolamento: ${bike.wheel.bearing.type}`);

