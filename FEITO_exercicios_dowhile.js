/*
===========================================================
Exercícios Práticos - Do...While
===========================================================
*/

// 1. Use do...while para imprimir números de 1 a 5.
var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// 2. Use do...while para pedir senha até ser "1234".
var senha;

do {
  senha = prompt("Digite sua senha:");
} while (senha !== "1234");
console.log("Senha correta!");

// 3. Use do...while para imprimir pares até 20.
var i = 2;

do {
  console.log(i);
  i += 2;
} while (i <= 20);

// 4. Use do...while para exibir uma mensagem pelo menos uma vez, mesmo que a condição seja falsa.
var condicao = false;

do {
  console.log("Esta mensagem será exibida pelo menos uma vez!");
} while (condicao);

// 5. Crie um do...while que conte de 10 até 1.
var i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1);

// 6. Crie um do...while que exiba os caracteres de uma string.
var texto = "Caio";
var i = 0;

do {
  console.log(texto[i]);
  i++;
} while (i < texto.length);

// 7. Use do...while para calcular soma de 1 a 100.
// 7. Use do...while para calcular a soma de 1 a 100
var i = 1;
var soma = 0;

do {
  soma += i;
  i++;
} while (i <= 100);
console.log("A soma de 1 a 100 é:", soma);

// 8. Use do...while para gerar números aleatórios até sair 0.
var numero;

do {
  numero = Math.floor(Math.random() * 10);
  console.log(numero);
} while (numero !== 0);
console.log("Número 0 gerado! Loop encerrado.");

// 9. Peça para o aluno prever o resultado:
var i = 0;

do {
  console.log(i);
  i++;
} while (i < 3); //Não entendi essa.

// 10. Crie um do...while que calcule o fatorial de 6.
var numero = 6;
var fatorial = 1;
var i = numero;

do {
  fatorial *= i;
  i--;
} while (i > 0);
console.log("Fatorial de " + numero + " é: " + fatorial);