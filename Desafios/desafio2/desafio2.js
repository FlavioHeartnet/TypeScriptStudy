"use strict";
let conta = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let cliente = {
    nome: 'Ana Silva',
    contabancaria: conta,
    contatos: ['34567890', '98765432']
};
cliente.contabancaria.depositar(800);
console.log(cliente);
