/*
===========================================================
Exercícios Práticos - For
===========================================================
*/

// 1. Use um for para imprimir números de 1 a 10.
for (var i = 1; i <= 10; i++) {
  console.log(i);
};

// 2. Use um for para imprimir números pares de 0 a 20.
for (var i = 0; i <= 20; i+= 2) {
  console.log(i);
};

// 3. Use um for para imprimir números ímpares de 1 a 15.
for (var i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
};

// 4. Calcule a soma dos números de 1 a 100 usando for.
var soma = 0;

for (var i = 1; i <= 100; i++) {
  soma += i;
};
console.log("A soma de 1 a 100 é:", soma);

// 5. Crie um array com 5 frutas e percorra com for exibindo cada uma.
var frutas = ["Maçã", "Banana", "Pêra", "Uva", "Kiwi"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
};

// 6. Crie um for que mostre a tabuada do 7.
var numero = 7;

for (var i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
};

// 7. Use um for para percorrer uma string e exibir cada caractere.
var texto = "Caio";

for (var i = 0; i < texto.length; i++) {
  console.log(texto[i]);
}

// 8. Use um for decrescente para contar de 10 até 1.
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// 9. Peça para o aluno prever o resultado:
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
} //Não entendi essa.


// 10. Crie um for que calcule o fatorial de 5.
var numero = 5;
var fatorial = 1;

for (var i = numero; i >= 1; i--) {
  fatorial *= i; 
}
console.log("Fatorial de " + numero + " é:", fatorial);