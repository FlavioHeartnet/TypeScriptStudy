class Moto {
    constructor(public nome:string, public velocidade: number = 0){}

    buzinar = ():void =>{
        console.log('tooooooot!')
    }

    acelerar = (delta: number): number => this.velocidade+=delta
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

//exercicio 2
class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0) {}
}

class Retangulo extends Objeto2D {
    constructor(base: number, altura: number){
        super(base, altura)
    }

    area = (): number => this.base * this.altura
}

const retangulo = new Retangulo(5,7)
console.log(retangulo.area())

//ecercicio 3
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(valor: string){
        if(valor.length >= 3){
             this._primeiroNome = valor
        }else{
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario()
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
