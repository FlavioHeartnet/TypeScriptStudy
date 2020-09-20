type contaBancaria = {saldo: number, depositar: (valor:number)=>number}
type corretista = {nome: string, contabancaria: contaBancaria, contatos: string[]}

let conta: contaBancaria = {
    saldo: 3456,
    depositar(valor:number): number{
        return this.saldo+=valor 
    }
}

let cliente: corretista = {
    nome: 'Ana Silva',
    contabancaria: conta,
    contatos: ['34567890', '98765432']
}

cliente.contabancaria.depositar(800)
console.log(cliente)