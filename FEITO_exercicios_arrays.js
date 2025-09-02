/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.
var pessoas = ["Danilo", "Caio", "Murilo", "Diana", "Erivaldo"];
console.log(pessoas)

// 2. Adicione um elemento ao final do array.
var pessoas = ["Danilo", "Caio", "Murilo", "Diana", "Erivaldo"];

pessoas.push("Rodrigo");
console.log(pessoas);

// 3. Remova o primeiro elemento do array.
var pessoas = ["Danilo", "Caio", "Murilo", "Diana", "Erivaldo"];

pessoas.shift();
console.log(pessoas);

// 4. Use map para transformar todos os elementos em strings maiúsculas.
var pessoas = ["Danilo", "Caio", "Murilo", "Diana", "Erivaldo"];

var pessoasMaiusculas = pessoas.map(pessoas => pessoas.toUpperCase());
console.log(pessoasMaiusculas);

// 5. Use filter para criar um novo array apenas com números pares.
var pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numerosPares = pares.filter(function(numero){
    return numero % 2 === 0;
});
console.log(numerosPares);

// 6. Use reduce para somar todos os números de um array.
var pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somaNumeros = pares.reduce((total, n) => total + n, 0);
console.log(somaNumeros);

// 7. Use find para encontrar o primeiro elemento maior que 10.
var pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var maior = pares.find(par => par > 10);
console.log(maior);

// 8. Ordene um array de números em ordem crescente.
var pares = [1, 2, 4, 5, 7, 8, 23, 10, 13, 3];

pares.sort(function(a, b){
    return a - b; //se o resultado for negativo, 'a' vem antes do 'b'
});
console.log(pares);

// 9. Inverta a ordem dos elementos de um array.
var pares = [1, 2, 4, 5, 7, 8, 23, 10, 13, 3];

pares.reverse(function(a, b){
    return a - b; //se o resultado for negativo, 'a' vem antes do 'b'
});
console.log(pares);

// 10. Faça a troca de valores entre dois índices usando destructuring.
var numeros = [1, 2, 3, 4, 5];

[numeros[1], numeros[3]] = [numeros[3], numeros[1]];
console.log(numeros);