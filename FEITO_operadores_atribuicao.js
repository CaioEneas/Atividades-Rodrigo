/*
===========================================================
Exercícios Práticos - Operadores de Atribuição
===========================================================
*/

// 1. Crie uma variável `n = 10`. Aplique `n += 5` e exiba.
var n = 10;
n += 5; 
console.log(n);

// 2. Continue com o mesmo `n`. Aplique `n -= 3` e exiba.
var n = 10;
n -= 3;
console.log(n);

// 3. Continue com o mesmo `n`. Aplique `n *= 2` e exiba.
var n = 10;
n*= 2;
console.log(n);

// 4. Continue com o mesmo `n`. Aplique `n /= 4` e exiba.
var n = 10;
n /= 4;
console.log(n);

// 5. Continue com o mesmo `n`. Aplique `n %= 3` e exiba.
var n = 10;
n %= 3;
console.log(n);

// 6. Continue com o mesmo `n`. Aplique `n **= 2` e exiba.
var n = 10;
n **=2;
console.log(n);

// 7. Mostre que `n = n + 1` é equivalente a `n += 1`.
var n = 10;
n = n + 1;
console.log(n); // Resultado = 11

var n = 10;
n += 1;
console.log(n); // Resultado = 11

// 8. Crie `a = 5` e `b = 2`. Atualize `a` usando `a *= b`. Exiba o resultado.
var a = 5;
var b = 2;

a *= b;
console.log(a);

// 9. Crie uma variável `saldo = 1000`. Desconte 15% usando operador de atribuição.
var saldo = 1000;

saldo += saldo * (15 / 100);
console.log(saldo);

// 10. Peça para o aluno prever o resultado antes de rodar:
// let x = 2;
// x += 3;
// x *= 2;
// x -= 4;
// console.log(x);

let x = 2;
x += 3;
x *= 2;
x -= 4;
resultado = prompt(int("Insira o resultado: "))

if(resultado == x){
    console.log("Você acertou!", console.log(resultado == x))
}
else{
    console.log("Errado!", console.log(x))
}