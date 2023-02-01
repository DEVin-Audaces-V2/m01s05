console.log('Aula2');

// EXEMPLOS HERANCA

class Animal {
  som;

  constructor(som) {
    this.som = som;
  }

  falar() {
    console.log(this.som);
  }
}

class Gato extends Animal {
  constructor() {
    super("MIAU");
  }
}

class Cachorro extends Animal {
  faro;

  constructor(faro) {
    super("AUAU");
    this.faro = faro;
  }
}

const oliver = new Gato();
const toto = new Cachorro('bom');

// console.log(oliver);
// console.log(toto);
// oliver.falar();
// toto.falar();


// EXEMPLOS MODULOS

import batata, { texto, numero as outroNome } from "./exemplo.js";
import { Pessoa } from "./index.js";

console.log(outroNome);
console.log(texto);
console.log(batata);
console.log(Pessoa);

// exemplo
// const obj = { numero: 42 };
// const { numero } = obj;