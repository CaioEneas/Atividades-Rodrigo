/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
const minhaString = "Sou o Caio";
console.log(minhaString);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
const pessoa = {
  nome: "Caio",
  idade: 20,
  cidade: "Distrito Federal"
};
console.log(pessoa.nome);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
const pessoa2 = {
  nome: "Caio",
  idade: 20,
  cidade: "Distrito Federal",
  genero: "Masculino",
  peso: 72
};
console.log(pessoa2.cidade);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
const carro = {
  marca: "Toyota",
  modelo: "Corolla"
};
carro.ano = 2022;
console.log(carro);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
const pessoa = {
  nome: "Murilo",
  idade: 25,
  cidade: "Brasília"
};
const propriedade = "cidade";

console.log(pessoa[propriedade]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function mostrar(obj) {
  for (let vari in obj) {
    console.log(`${vari}: ${obj[vari]}`);
  }
}

const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Brasília"
};

mostrar(pessoa);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
const pessoa = {
  nome: "Danilo",
  contato: {
    email: "daniloeneas@email.com"
  }
};
console.log(pessoa.contato.email);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
const frutas = ["maçã", "banana", "laranja"];

frutas.forEach((valor, indice) => {
  console.log(`Índice: ${indice}, Valor: ${valor}`);
});

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let mensagem = "Sou global";
function mostrarMensagens() {
  let mensagem = "Sou local";
  console.log(mensagem);
}
mostrarMensagens();

console.log(mensagem);

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2010
};
console.log("Antes:", carro.modelo); 

carro.modelo = "Mustang";

console.log("Depois:", carro.modelo);