/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.
var numeros = [10, 20, 30, 40];

const a1 = numeros[0];
const b1 = numeros[1];
console.log(a1, b1);

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.
var pessoa = {
  nome: "Caio",
  idade: 21,
  cidade: "Brasília"
};
var { nome, idade } = pessoa;
console.log(nome, idade); 

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.
function exibirMensagem({ nome, saudacao = "Olá" }) {
  console.log(`${saudacao}, ${nome}!`);
}
exibirMensagem({ nome: "Caio" });

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.
const usuario = {
  nome: "Ana",
  endereco: {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
  }
};

const {
  endereco: { rua, cidade }
} = usuario;

console.log(rua",", cidade);

// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.
const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro);
console.log(resto);

// 6. Troque os valores de duas variáveis usando destructuring.
let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a, b);

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.
function apresentar({ nome, idade }) {
  console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}
apresentar({ nome: "Caio", idade: 20 });

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.
function exibirUsuario(usuario) {
  const { nome, idade } = usuario;
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
exibirUsuario({ nome: "Caio", idade: 20 });

// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.
const usuario = {
  nome: "Lucas"
};
const { nome: usuarioNome, idade: usuarioIdade = 18 } = usuario;

console.log(usuarioNome);
console.log(usuarioIdade);

// 10. Use destructuring para extrair elementos de um array retornado por uma função.
function coordenadas() {
  return [10, 20];
}
const [x, y] = coordenadas();

console.log(x, y);