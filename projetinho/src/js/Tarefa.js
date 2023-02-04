import Item from "./Item.js";

export default class Tarefa extends Item {
  feito = false;

  criaElemento(aoApagarItem) {
    const li = document.createElement("li");
    li.innerHTML = `<p>${this.label}</p>`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", (event) => {
      console.log("Clicou", event);
    });
    li.appendChild(checkbox);

    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "x";
    botaoApagar.addEventListener("click", () => {
      aoApagarItem(super.id);
    });

    li.appendChild(botaoApagar);
    return li;
  }
}