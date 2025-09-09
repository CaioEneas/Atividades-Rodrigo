/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.
var soma = function (a, b) {
  return a + b;
};

console.log(soma(8, 13));

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.
var multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 8));

// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`;
};
console.log(saudacao());
console.log(saudacao("Caio"))

// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.
function media(...numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  var soma = 0;
  numeros.forEach(num => soma += num);

  return soma / numeros.length;
}
console.log(media(10, 20, 30));

// 5. Crie uma função que retorna outra função que adiciona um número fixo.
function adicionar(fixo) {
  return function(numero) {
    return numero + fixo;
  };
};
var mais5 = adicionar(5);
console.log(mais5(10));

// 6. Escreva uma IIFE que imprima "Função autoexecutada".
(function() {
  console.log("Função autoexecutada");
})();

// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.
var pessoa = {
  nome: "Caio",
  saudacao: function() {
    console.log("Oi, meu nome é " + this.nome);
  } //Função tradicional - o this depende de quem chamou.
};
pessoa.saudacao();

var pessoa = {
  nome: "Caio",
  saudacao: () => {
    console.log("Oi, meu nome é " + this.nome);
  } //Arrow function - o this é fixo e vem do contexto onde foi criado.
};
pessoa.saudacao();

// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.
function dados({ nome, idade, cidade }) {
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Cidade: " + cidade);
}
var pessoa = { nome: "Caio", idade: 21, cidade: "Brasília" };
dados(pessoa);

// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.
function trocar(a, b) {
  [a, b] = [b, a];
  return [a, b];
};
var x = 2, y = 3;
[x, y] = trocar(x, y);
console.log("x:", x, "y:", y);

// 10. Crie uma função recursiva que calcula o fatorial de um número.
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}
console.log(fatorial(3));