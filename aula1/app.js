console.log("AULA1");

const paragrafo = document.getElementById("mensagem");
const btnAperta = document.getElementById("aperta");

const vetor = [2, 3, 4, 6, 7];

if (Array.isArray(vetor)) {
  paragrafo.innerText = "É vetor!";
} else {
  paragrafo.innerHTML = "Não é vetor!";
}

vetor.forEach((n) => console.log(n));

console.log(vetor.filter(n => n % 2 === 0))

function apertou() {
  console.log("Apertou o botão!");
}

function apertouDenovo() {
  console.log("Apertou o botão denovo!");
}

btnAperta.addEventListener('click', apertou);
btnAperta.addEventListener('click', apertouDenovo);
