function getValue() {
    var returnValue = function() {
        return 1;
    }

    return returnValue();

    // daqui pra baixo nem roda

    var returnValue = function() {
        return 2;
    }
}

var result = getValue();
console.log(result); // 1

// Talvez seja um pouco estranho pensar que esse código retornará o Valor 2
// Mas esse código abaixo simplifica o que está acontecendo no bloco acima
// A ATRIBUIÇÃO NÃO SOBRE JUNTO COM A DECLARAÇÃO, SOMENTE A DECLARAÇÃO SOBE

function getValue2() {
    var returnValue = undefined;
    var returnValue = undefined;

    returnValue = function() {
        return 1;
    }

    return returnValue();

    returnValue = function() {
        return 2;
    }
}

var result2 = getValue2();
console.log(result2); // 1