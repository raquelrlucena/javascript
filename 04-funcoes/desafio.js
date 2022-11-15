/* imc com funcoes*/

function calcularimc (peso, altura) {
    return peso / (altura*altura);
}

function classificarimc (imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

//Main

(function () {
    const peso = 58.3;
    const altura = 1.63;
    const imc = calcularimc (peso, altura);
    console.log (classificarimc(imc));
})();