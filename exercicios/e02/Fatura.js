export default class Fatura {
  id;
  descricao;
  quantia = 0;
  preco = 0;

  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    // exemplo teste com if
    if (quantia > 0) {
      this.quantia = quantia;
    }
    // exemplo teste com ternario
    this.preco = preco > 0 ? preco : 0;
  }

  obterValorTotal() {
    return this.quantia * this.preco;
  }

  get valorTotal() {
    return this.obterValorTotal();
  }
}