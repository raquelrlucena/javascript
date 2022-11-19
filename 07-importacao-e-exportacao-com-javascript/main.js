const {gets, print} = require ('./funcoes-gets-e-print');

const numerossorteados = [];

for (let i = 0; i < 5; i++) {
    const numerossorteado = gets();
    numerossorteados.push(numerossorteado);
}

let maiorvalor = 0;

for (let i = 0; i < numerossorteados.length; i++) {
    const numerossorteado = numerossorteados [i];
    if (numerossorteado > maiorvalor) {
        maiorvalor = numerossorteado;
    }
}

print (maiorvalor);