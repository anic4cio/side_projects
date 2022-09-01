// HOISING É SOBRE ELEVAÇÃO DE DECLARAÇÕES

function getValor() {
    function returnValor() {
        return 1;
    }

    return returnValor();

    function returnValor() {
        return 2;
    }

    // return returnValor();
}

// Esse exemplo nos dá uma noção ainda mais clara do hoising
// HOISING É SOBRE ELEVAÇÃO DE DECLARAÇÕES
// A função returnValor é declarada duas vezes dentro de outra função
// Há um return entre as funções, talvez pensemos que o resultado do return é 1
// pois ele retornaria o valor da primeira função
// Mas como o hoising eleva as duas funções o return desce e fica no fim da função maior
// O return que prevalece é o segundo, pois ele acaba ficando por último

var result = getValor();
console.log(result);