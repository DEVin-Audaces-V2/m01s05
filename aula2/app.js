console.log('Aula2');

class Animal {
  som;
  nrPatas;

  constructor(som, nrPatas) {
    this.som = som;
    this.nrPatas = nrPatas;
  }

  falar() {
    console.log(this.som);
  }
}

class Mamifero extends Animal {
  constructor(som) {
    super(som, 4);
  }

  andar() {
    console.log("andou");
  }
}

class Gato extends Mamifero {
  constructor() {
    super("MIAU");
  }
}

const oliver = new Gato();

console.log(oliver);

oliver.falar();
oliver.andar();
