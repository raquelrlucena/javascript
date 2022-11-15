/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const etanol = 4.80;
const gasolina = 5.20;
const kmporlitro = 9.5;
const distanciakm = 126.5;
const tipocombustivel = 'Etanol'

const litrosconsumidos = distanciakm/kmporlitro;

if (tipocombustivel === "Gasolina") {
    const valorgasto = litrosconsumidos*gasolina;
    console.log (valorgasto.toFixed(2));
} else {
    const valorgasto = litrosconsumidos*etanol;
    console.log (valorgasto.toFixed(2));
}