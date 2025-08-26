/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Caio";
console.log("Tipo da Variável",typeof nome); // "string"
console.log("Meu nome é:", nome)

// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = "216"
console.log("Tipo da variável", typeof numero); //"string"
console.log("Sua numerica é:", numero)

numero = "233"
console.log("Tipo da variável", typeof numero);
console.log("Sua nova numerica:", numero)

// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const recruta = [];
recruta.push("Nome de guerra: Eneas");
recruta.push("Posto: S2");
recruta.push("Numérica: 216");

console.log("Tipo da variável", typeof recruta);
console.log("Militar:", recruta);

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if(true){
    var nome = "Rodrigo";
}
console.log("Tipo da variável", typeof recruta);
console.log("Nome do professor:", nome);

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if(true){
    let semestre = "Quarto semestre";
}
console.log("Tipo da variável", typeof recruta);
console.log("Qual semestre atual:", semestre) // "A variável LET só está declarada dentro da condição IF"

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
if(true){
    var gay = "Higor Reis"
    console.log("O mais gay é:", gay);

    var gay = "Gay redeclarado: Iggor Mateus";
    console.log(gay);
}

if(true){
    let gay = "Higor Reis"
    console.log("O mais gay é:", gay);

    let gay = "Gay redeclarado: Iggor Mateus";
    console.log(gay);
} // "Deu erro porque o LET não permite redeclaração no mesmo escopo"

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const nome = [];

nome.push("Caio");
nome.push(" 20 anos");

console.log("Tipo da variável", typeof nome);
console.log("Dados: " + nome);

// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let eneas;
eneas = "Meu nome é Enéas!";
console.log("Vote 0216,", eneas);


// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
var eu;
console.log(eu)
eu = "Eu sou o Caio";
console.log(eu);

// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
if(true){
    var irmao = "Danilo e Murilo";
}
console.log("Tipo da variável é:", typeof irmao);
console.log(irmao, "são meus irmãos");  //"Deu certo, pois o VAR permite ser acessado fora da função.
                                        // "Ao contrário do LET que a variável declarada dentro da função
                                        // não pode ser usada fora da mesma."
