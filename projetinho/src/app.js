const campoTitulo = document.getElementById("campo-titulo");
const botaoSalvar = document.getElementById("botao-salvar");
const listaItens = document.getElementById("lista-itens");
const formulario = document.getElementById("formulario");

let vetorItens = [
  "item 0",
  "outro item",
  "e mais um",
];

function apagaItem(itemParaApagar) {
  vetorItens = vetorItens.filter(item => item !== itemParaApagar);
  atualizaTela();
}

function criaElementoItem(item) {
  const li = document.createElement("li");
  li.innerHTML = item;
  const botaoApagar = document.createElement("button");
  botaoApagar.innerHTML = "x";
  botaoApagar.addEventListener("click", () => {
    apagaItem(item);
  });
  li.appendChild(botaoApagar);
  return li;
}

function atualizaTela() {
  listaItens.innerHTML = "";

  vetorItens.forEach(item => {
    const elemento = criaElementoItem(item);
    listaItens.appendChild(elemento);
  });
}

function adicionaItem() {
  const titulo = campoTitulo.value;
  if (titulo) {
    vetorItens.push(titulo);
    atualizaTela();
    campoTitulo.value = "";
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionaItem();
});

atualizaTela();
