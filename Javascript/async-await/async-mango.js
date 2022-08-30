// Sobre programação assíncrona, é importante saber que:
// Uma promise num código sempre vai se executada antes de um setTimeout, por exemplo. Mesmo o setTimeout ter sido escrito antes
// O código Javascript assíncrono é excecutado em loops, cada loop excecuta um "tarefa" individualmente. 
// Essas "tarefas" assíncronas são excecutada numa ordem específica, como o caso com as promises vs setTimeout


console.log(`UM`); // 1° Será excecutado primeiro

setTimeout(() => { 
    console.log(`DOIS`); // 4° Por último , o setTimeout é executado e printa a string "DOIS"
}, 2000);

const promise = new Promise((resolve, reject) => { 
    resolve(`Promise resolve data`)
});

promise.then(data => console.log(data)); // 3° Mesmo o setTimeout ter sido escrito antes, essa chamada da promise é excecutada antes 

for(let i = 1; i <= 60; i++) { // 2° O JS pula as linhas acima e excecuta toda essa iteração.
    console.log(i);
};
