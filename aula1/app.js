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
console.log(vetor);

// Criando uma Classe

class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    //console.log("Executou o constructor", parametro);
  }
}

const r1 = new Retangulo(4, 6);
r1.batata = 555;
const r2 = new Retangulo(5, 3);
const r3 = new Retangulo(6, 1);
const r4 = new Retangulo(2, 1);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
