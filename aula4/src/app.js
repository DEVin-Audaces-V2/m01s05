console.log("aula4");


import Animale from "./Animal.js";

class Mamifero extends Animale {

  caminha() {
    console.log("Executou caminha mamifero!");
  }

  corre() {
    this.caminha();
    super.caminha();
  }
}

//const cachorro = new Mamifero();

//cachorro.corre();
// cachorro.caminha();
// Acessando método estático herdado
// Mamifero.caminha();


// EXEMPLO POLIMORFISMO

class Animal {
  speak() {
    console.log("?");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof");
  }
}
class Duck extends Animal {
  speak() {
    console.log("Quack");
  }
}

const gato = new Cat();
const cachorro = new Dog();
const pato = new Duck();
gato.speak();
cachorro.speak();
pato.speak();
