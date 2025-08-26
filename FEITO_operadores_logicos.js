/*
===========================================================
Exercícios Práticos - Operadores Lógicos
===========================================================
*/

// 1. Crie p = true e q = false. Exiba p && q.
var p = true;
var q = false;
console.log(p && q);

// 2. Exiba p || q.
var p = true;
var q = false;
console.log(p || q);

// 3. Exiba !p e !q.
var p = true;
var q = false;
console.log(!p && !q);

// 4. Verifique se idade > 18 E temCarteira == true.
var idade = 19;
var temCarteira = true;

if(idade >= 18 && temCarteira == true){
    console.log("Permitido dirigir")
}

// 5. Use || para definir um valor padrão se uma variável for undefined.


// 6. Teste (5 > 3 && 10 < 20).
console.log(5 > 3 && 10 < 20);

// 7. Teste (false || (true && true)).
console.log(false || (true && true));

// 8. Crie um if que só roda se usuario == "admin" E senha == "1234".
usuario = "admin"
senha = "1234"

if(usuario == "admin" && senha == "1234"){
    console.log("Login efetuado com sucesso!")
}
else{
    console.log("Acesso negado!")
}

// 9. Crie uma expressão com !(nota >= 7).
var nota = 11;
console.log(!(nota >= 7));

// 10. Peça para o aluno prever o resultado de:
let x = false, y = true, z = false;

console.log("let x = false, y = true, z = false;")
var resposta = prompt("O resultado será 'true' ou 'false'?")

console.log("Gabarito:", x || y && !z);
