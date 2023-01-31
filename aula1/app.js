console.log("AULA1");

/*
const paragrafo = document.getElementById("mensagem");
const btnAperta = document.getElementById("aperta");

const vetor = [2, 3, 4, 6, 7];

if (Array.isArray(vetor)) {
  paragrafo.innerText = "É vetor!";
} else {
  paragrafo.innerHTML = "Não é vetor!";
}

//vetor.forEach((n) => console.log(n));
//console.log(vetor.filter(n => n % 2 === 0))

function apertou() {
  console.log("Apertou o botão!");
}

function apertouDenovo() {
  console.log("Apertou o botão denovo!");
}

btnAperta.addEventListener('click', apertou);
btnAperta.addEventListener('click', apertouDenovo);
*/

// EXEMPLOS CLASSES

const vetor = new Array();
const vetorb = new Array();
vetor.push(3);
//console.log(vetor);

// Criando uma Classe

class Retangulo {
  base
  #altura

  constructor(base, altura) {
    this.base = base;
    this.#altura = altura;
  }

  calculaArea() {
    const area = this.base * this.#altura;
    console.log(area);
    this.#exemplo();
  }

  #exemplo() {
    console.log("Exemplo");
  }
}

const r1 = new Retangulo(4, 6);
const r2 = new Retangulo(5, 3);
const r3 = new Retangulo(6, 1);

//console.log(r1);
//console.log(r2.base);
//console.log(r3.#altura);

//r1.calculaArea();
//r2.calculaArea();
//r3.calculaArea();


class Pessoa {
  constructor(nome, rg, endereco) {
    this.nome = nome;
    this.rg = rg;
    this.endereco = endereco;
  }
}

class Endereco {
  constructor(logradouro, numero) {
    this.logradouro = logradouro;
    this.numero = numero;
  }
}

const endrA = new Endereco("Rua Fulana de Tal", "456");
const romeu = new Pessoa("Romeu", "0987654321", endrA);

//console.log(`${romeu.nome} mora em ${romeu.endereco.logradouro}`);


// EXEMPLO EXERCICIO 1

import Funcionario from "./Funcionario.js";

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500