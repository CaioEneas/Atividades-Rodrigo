/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
const produto = {
  nome: "Camisa",
  cor: "Azul",
  preco: 30
};
console.log(produto);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
const pessoa = {
  nome: "Mariana",
  idade: 22,
  cidade: "Belo Horizonte"
};
console.log(pessoa.nome);

console.log(pessoa["cidade"]);

// 3. Adicione uma nova propriedade ao objeto depois de criado.
const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2018
};
carro.cor = "Preto";

console.log(carro);

// 4. Remova uma propriedade do objeto.
const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2018
};
console.log(carro);

delete carro.ano;
console.log(carro)

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
const aluno = {
  nome: "Caio",
  idade: 20,
  curso: "Análise e Desenvolvimento de Sistemas",

  apresentar() {
    return `Olá, meu nome é ${this.nome} e curso ${this.curso}.`;
  }
};
console.log(aluno.apresentar());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
const usuario = {
  nome: "Danilo",
  endereco: {
    rua: "Samambaia",
    numero: 123,
    cidade: "Distrito Federal"
  }
};
console.log(usuario.endereco.cidade);

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
const livro = {
  titulo: "Nada pode me ferir",
  autor: "David Goggins",
  ano: 2022
};
for (let chave in livro) {
  console.log(`${chave}: ${livro[chave]}`);
}

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
const usuarioOriginal = {
  nome: "Murilo",
  idade: 11,
  cidade: "Distrito Federal"
};
const usuarioClone = { ...usuarioOriginal };

usuarioClone.cidade = "Distrito Federal";

console.log("Original:", usuarioOriginal);
console.log("Clone:", usuarioClone);

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
const obj1 = { nome: "Ana", idade: 25 };
const obj2 = { nome: "Ana", idade: 25 };

console.log(obj1 === obj2); //é falso, pois cada um se refere a um objeto, por mais que os dois 
                            // objetos sejam igual no valores, eles são diferentes

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
const conta = {
  titular: "Murilo",
  saldo: 1000
};
Object.freeze(conta); 

conta.saldo = 2000;

conta.ativa = true;

console.log(conta);