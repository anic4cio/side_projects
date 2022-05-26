try {
    throw new Error ('The code has a trouble');
} catch(e) {
    console.log(e.name + ': ' + e.message);
}


// meu, até o erro é um objeto. Literalmente TUDO é um objeto