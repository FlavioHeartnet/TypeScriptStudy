"use strict";
//string
let nome = 'joao';
console.log(nome);
//numbers
let idade = 27;
idade = 27.5;
//boolean
let posuihobbies = false;
console.log(posuihobbies);
//tipo explicitos
let minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
minhaidade = 'minha idade é 27';
console.log(typeof minhaidade);
//Array
let hobbies = ['cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
//tuplas
let endereco = ["Av principal", 99];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
console.log(minhaCor);
//any
let carro = 'BMW';
carro = ['BMW', 1999];
//funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function Ola() {
    console.log('oi');
}
Ola();
//tipo função
let calculo;
function multiplicar(num1, num2) {
    return num1 * num2;
}
calculo = multiplicar;
//objetos
let usuario = {
    nome: 'joao',
    idade: 27
};
console.log(usuario);
let usuario2 = {
    nome: 'joao',
    idade: 27
};
usuario = {
    nome: 'flavio',
    idade: 26
};
console.log(usuario);
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = 'la';
console.log(`Minha nota é ${nota}!`);
// checando manual
let valor = 30;
if (typeof valor == 'number') {
    console.log("é number");
}
else {
    console.log(typeof valor);
}
//Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabao',
    preco: 4,
    validarProduto() {
        if (this.nome.trim().length == 0) {
            falha('precisa ter nome');
        }
        if (this.preco <= 0) {
            falha('Preco Invalido');
        }
    }
};
produto.validarProduto();
//Null
let altura = 12;
altura = null;
// this
function normalComThis() {
    //console.log(this)
}
const normalComThisEspecial = normalComThis.bind({ nome: 'ola' });
normalComThisEspecial();
//Rest & Spread
const number = [12, 99, 10, 123, 5];
console.log(Math.max(...number));
const turmaA = ['jão', 'fernando', 'maria', 'fernanda'];
const turmaB = ['Carlos', ...turmaA, 'Roger'];
function retornaArray(...args) {
    return args;
}
retornaArray(...number);
// Rest & Spread (Tuplas)
const tupla = [1, 'abc', false];
function tuplaFunction(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaFunction(...tupla);
function tuplaFunction2(...params) {
    return params;
}
//Descrutire array
const caracteristicas = ['motor zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//Destructing Object
const item = {
    nome: 'ssd 480GB',
    preco: 200
};
const { nome: n1, preco: p } = item;
console.log(n1);
console.log(p);
//Callback
// function esperar3s(callback: (dado: string) => void){
//     setTimeout(() => {
//         callback('3s depois...')
//     }, 3000);
// }
// esperar3s((resultado: string) => {
//     console.log(resultado)
// })
// //Promises
// function esperar3sPromise(){
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3s depois promise...')
//         }, 3000);
//     })
// }
// esperar3sPromise().then(dado => console.log(dado))
// fetch('https://swapi.dev/api/people/1/').then(resp => resp.json()
// .then(dados => fetch(dados.films[3])
// .then(filmes => filmes.json()
// .then(resps => console.log(resps))
// )))
//Classes e Atributos
