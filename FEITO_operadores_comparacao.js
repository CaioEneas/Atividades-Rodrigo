/*
===========================================================
Exercícios Práticos - Operadores de Comparação
===========================================================
*/

// 1. Teste 5 == "5" e exiba o resultado.
console.log(5 == "5");

// 2. Teste 5 === "5" e exiba o resultado.
console.log(5 === "5");

// 3. Teste 5 != "5" e 5 !== "5". Explique a diferença.
console.log(5 != "5"); // O "!=" compara somente os valores

console.log(5 !== "5"); // O "!==" compara os valores e o tipo da variável

// 4. Teste 10 > 5.
console.log(10 > 5);

// 5. Teste 10 < 5.
console.log(10 < 5);

// 6. Teste 10 >= 10.
console.log(10 >= 10);

// 7. Teste 5 <= 7.
console.log(5 <= 7);

// 8. Crie uma variável `idade = 20`. Verifique se é maior ou igual a 18.
var idade = 20;
console.log(idade >= 18);

// 9. Crie uma variável `nota = 6`. Verifique se `nota >= 7`.
var nota = 6;
console.log(nota >= 7);

// 10. Peça para o aluno prever o resultado de:
let a = 10, b = "10";

var resposta1 = prompt("Qual será o resultado de 'a == b'? Verdadeiro ou Falso?")
var resposta2 = prompt("Qual será o resultado de 'a === b'? Verdadeiro ou Falso?")

if(resposta1 == (a == b)){
    console.log("Resposta certa")
}
else{
    console.log("Resposta errada")
}

if(resposta2 == (a === b)){
    console.log("Resposta correta")
}
else{
    console.log("Resposta incorreta")
}

console.log("Gabarito 'a ==b':", console.log(a == b));
console.log("Gabarito 'a === b':", console.log( a === b));


