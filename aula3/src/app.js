console.log('aula3');

// EXEMPLO Getter em Classe
class Retangulo {
  #base;
  #altura;
  exemploNaoStatic = "Pertenço a instância";
  static exemploStatic = "Pertenço a Retangulo";

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
  static isRetangulo() {
    console.log("testa se é instancia de retangulo");
  }
}

const quad = new Retangulo(4, 111111);
//quad.altura = 77777777777;
// console.log(quad.altura);
// quad.exemploStatic = 234;
// console.log(quad);
// console.log(quad.calculaArea());
// console.log(quad.exemploNaoStatic);
// console.log(Retangulo.exemploStatic);
// Retangulo.isRetangulo()


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


// EXEMPLOS de atributos e métodos STATIC


class Item {
  static #nextId = 0;
  id;
  label;
  batata;

  constructor(label) {
    this.id = Item.#nextId++;
    this.label = label;
  }

  static isItem(parametro) {
    return parametro instanceof Item;
  }
}

const item1 = new Item('batata');
const item2 = new Item('mamão');
const item3 = new Item('banana');

console.log(item1);
// console.log(item2);
// console.log(item3);


const vetor = new Array();
//vetor.isArray(); // isso não existe
//console.log(Array.isArray(vetor));

console.log(item1 instanceof Item);
console.log(Item.isItem(item2));
