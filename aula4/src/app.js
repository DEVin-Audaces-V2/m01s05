console.log("aula4");


import Animal from "./Animal.js";

class Mamifero extends Animal {

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

class Animall {
  speak() {
    console.log("?");
  }
}
class Cat extends Animall {
  speak() {
    console.log("Meow");
  }
}
class Dog extends Animall {
  speak() {
    console.log("Woof");
  }
}
class Duck extends Animall {
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
