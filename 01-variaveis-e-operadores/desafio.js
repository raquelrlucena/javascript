/* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;
Imprima no console o valor que será gasto para realizar esta viagem. */

const combustivel = 5.20;
const kmporlitro = 9.5;
const distanciakm = 126.5;

const litrosconsumidos = distanciakm/kmporlitro;
const valorgasto = litrosconsumidos*combustivel;
console.log(valorgasto.toFixed(2));