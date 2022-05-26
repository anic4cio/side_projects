const Cozinha = estilo => `Cozinha ${estilo}`;
const Banheiro = tipo => `Banheiro do tipo ${tipo}`;
const Quarto = tipo => `Quarto ${tipo}`;

class Imovel {
    constructor(endereço) {
        this.endereço = endereço;
    }
}

const minhaCasa = new Imovel("rua abc");
minhaCasa.cozinha = Cozinha('Moderna');
minhaCasa.lavabo = Banheiro('Lavabo');
minhaCasa.banheiro = Banheiro('Completo');
minhaCasa.suite = Quarto('Suite');

console.log(minhaCasa); 
/** 
object minhaCasa { 
    endereço: "rua abc",
    cozinha: "Cozinha Moderna",
    lavabo: "Banheiro do tipo Lavabo",
    banheiro: "Banheiro do tipo Completo",
    suite: "Quarto Suite"
}
**/ 

console.log(minhaCasa.suite); //  "Quarto Suite"
console.log(minhaCasa.lavabo); // "Banheiro do tipo Lavabo"