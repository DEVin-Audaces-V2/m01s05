
export const numero = 42;

export let texto = 'kaizen';

export const objeto = {
  sou: 'somos',
  um: 234
};

export function soma(a, b) {
  return a + b;
}

export default class Pessoa {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}

// Exemplo de como empacotar todos exports em um objeto
// prejudica o processo de tree-shaking
// export default {
//     numero,
//     texto,
//     objeto,
//     soma,
//     Pessoa
// };
