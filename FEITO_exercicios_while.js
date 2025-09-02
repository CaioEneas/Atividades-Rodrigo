/*
===========================================================
Exercícios Práticos - While
===========================================================
*/

// 1. Use um while para imprimir números de 1 a 10.
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// 2. Use um while para imprimir números pares até 20.
var i = 2;
while(i <= 20){
    console.log(i);
    i += 2;
}

// 3. Some números de 1 a 100 usando while.
var i = 1;
var soma = 0;

while(i <= 100){
    soma += i;
    i++;
};
console.log(soma);

// 4. Crie um while que conte de 10 até 1.
var i = 10;
while(i >= 1){
    console.log(i);
    i--;
};

// 5. Crie um while que peça senha até ser igual a "1234".
var senha = "";

while(senha !== "1234"){
    senha = prompt("Senha incorreta. Digite sua senha:")
};
console.log("Senha correta");

// 6. Crie um while que calcule a tabuada do 5.
var i = 1;
while(i <= 10){
    console.log("5 x " + i + " = " + (5 * i));
    i++;
};

// 7. Crie um while que exiba os caracteres da string "JavaScript".
var palavra = "JavaScript";
var i = 0;

while (i < palavra.length) {
  console.log(palavra[i]);
  i++;
};

// 8. Use while para calcular o fatorial de 5.
var numero = 5;
var fatorial = 1;
var i = numero;

while (i > 0) {
  fatorial *= i;
  i--;
}
console.log("Fatorial de " + numero + " é: " + fatorial);

// 9. Peça para o aluno prever o resultado:
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
} //Não entendi essa direito, Rodrigo.


// 10. Crie um while que só termina quando um número aleatório for 7.
var numero = 0;

while (numero !== 7) {
  numero = Math.floor(Math.random() * 10) + 1;
  console.log(numero);
}
console.log("Número 7 gerado! Loop encerrado.");