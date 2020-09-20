//exercicio 1
const dobro = (valor:number): number => valor * 2
console.log(dobro(5));

//exercicio2
const dizerOla = (nome: string = 'Pessoa') : void =>{
    console.log(`Olá ${nome}`)
}
dizerOla()
dizerOla('Flavio')

//exercicio 3
const array: number[] = [-3,33,38,5]

console.log(Math.min(...array))

//exercicio 4
let array2: number[] = [55,20]

array2 = [...array]
console.log(array2)

//exercicio 5
let notas:number[] = [8.5,6.3,9.4]

const [nota1,nota2,nota3] = notas
console.log(nota1, nota2, nota3)

//exercicio 6
let cientista = {
    primeiroNome: 'Will',
    experiencia: 12
}

const {primeiroNome: n, experiencia: e} = cientista
console.log(n,e)
