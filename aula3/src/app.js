console.log('aula3');

// EXEMPLO Getter em Classe
class Retangulo {
  #base
  #altura

  constructor(b, a) {
    this.#base = b;
    this.#altura = a;
  }
  calculaArea() {
    return this.#base * this.#altura;
  }
  get altura() {
    console.log("executou o Getter");
    return this.#altura;
  }
  set altura(novoValor) {
    console.log("executou o Setter");
    this.#altura = novoValor;
  }
}

const quad = new Retangulo(4, 111111);
//quad.altura = 44444;
quad.altura = 77777777777;
console.log(quad.altura);
//console.log(quad.blah);
console.log(quad);
//console.log(quad.calculaArea());


// EXEMPLO de Getter/Setter em Objeto Comum
const objetoComum = {
  valorInterno: 42,
  get valor() {
    return this.valorInterno;
  },
  set valor(novoValor) {
    this.valorInterno = novoValor;
  }
};
// console.log(objetoComum.valorInterno);
// console.log(objetoComum.valor);
// objetoComum.valor = 9999999;
// console.log(objetoComum);


import Fatura from "./Fatura.js";
const melao = new Fatura(123, "Melão", 2, 3);
const valor = melao.obterValorTotal();
//console.log(valor); // 6
//console.log(melao.valorTotal);