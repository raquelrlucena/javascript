/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class carro {
    marca;
    cor;
    gastomediokm;

    constructor (marca, cor, gastomediokm) {
        this.marca = marca;
        this.cor = cor;
        this.gastomediokm = gastomediokm;
    }

    calculargasto (distanciakm, pcombustivel){
        return distanciakm * this.gastomediokm * pcombustivel;
    }

}

const sandero = new carro ('renault', 'cinza', 1/9.5);
console.log (sandero.calculargasto(126.5, 5.20));