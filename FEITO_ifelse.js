/*
===========================================================
Exercícios Práticos - If/Else
===========================================================
*/

// 1. Crie uma variável idade. Se idade >= 18 exiba "Maior de idade", senão "Menor de idade".
var idade = 17
if(idade >= 18){
    console.log("Maior de idade!")
}
else{
    console.log("Menor de idade!")
}

// 2. Crie uma variável hora. Se hora < 12 → "Bom dia", senão → "Boa tarde".
var hora = 11
if(hora < 12){
    console.log("Bom dia!")
}
else{
    console.log("Boa tarde!")
}

// 3. Crie uma variável nota. Se >= 7 → "Aprovado", senão → "Reprovado".
var nota = 7
if(nota >= 7){
    console.log("Aprovado!")
}
else{
    console.log("Reprovado.")
}

// 4. Crie uma variável temperatura. Se >= 30 → "Quente", se >= 20 → "Agradável", senão → "Frio".
var temperatura = 32
if(temperatura >= 30){
    console.log("Quente.")
}
else {
    console.log("Frio.")
}

// 5. Verifique se um número é par ou ímpar.
var numero = 9
if(numero % 2){
    console.log("Ímpar")
}
else{
    console.log("Par")
}

// 6. Crie duas variáveis usuario e senha. Verifique se usuario == "admin" e senha == "1234".
var usuario = "admin"
var senha = "1234"
if(usuario == "admin" && senha == "1234"){
    console.log("Logado")
}
else{
    console.log("Acesso negado!")
}

// 7. Crie uma condição que só exiba mensagem se uma variável ativo == true.
ativo = true
if(ativo == true){
    console.log("Tudo certo!")
}

// 8. Crie um programa que verifique se ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).
var ano1 = 365
var ano2 = 366
if(ano2 % 2){
    console.log("Não é bissexto.")
}
else{
    console.log("Ano Bissexto!")
}

// 9. Peça para o aluno prever o resultado:
// let x = 5;
// if (x > 10) { console.log("Maior que 10"); }
// else if (x > 3) { console.log("Maior que 3"); }
// else { console.log("Outro caso"); }


// 10. Crie um programa que receba 3 notas e calcule a média.
// Se média >= 7 → "Aprovado"
// Se média >= 5 → "Recuperação"
// Senão → "Reprovado".
var nota1 = parseFloat(prompt("Digite sua primeira nota: "))
var nota2 = parseFloat(prompt("Digite sua segunda nota: "))
var nota3 = parseFloat(prompt("Digite sua terceira nota:"))
var media = (nota1 + nota2 + nota3) / 3
if(media >= 7){
    console.log("Aprovado!")
}
else if( media >= 5){
    console.log("Recuperação.")
}
else{
    console.log("Reprovado!")
}