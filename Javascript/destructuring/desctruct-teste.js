// Testes com destructuring e muita viajem na maionese

function dreams([param, ...others]) {
    console.log(others.join(' - '), param)
};

const items = ['fly', 'strenth', 'cranium', 'upper', 'eater', 'satisfaction', 'body'];

dreams(items); // strenth - cranium - upper - eater - satisfaction - body fly

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// É importante lembrar que o comportamento do destructuring em arrays é diferente do compotamento dele em objetos
// Em objetos devemos refenrenciar cada item com seu nome raiz
// para alterar deve se usar uma sintaxe específica para isso

function rides({speeder: ship, torque, ...rest}) {
    console.log(ship, torque, rest);
    // Se sentar concatenar esse log com alguma string para fazer uma frase bonitinha. Ele mostra = [object Object]
}

const ships = {
    speeder: 'ZX10',
    cracker: 'SM701',
    torque: 'FZ09',
    confort: 'Goldwing'
};

rides(ships);
