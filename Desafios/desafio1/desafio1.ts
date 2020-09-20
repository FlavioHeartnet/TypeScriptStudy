type Funcionario = {
    supervisores:string[],
    baterPonto: (horas:number) => string
} 

let funcionario: Funcionario = {
    supervisores: ['Jose', 'Carlos'],
    baterPonto(horas: number): string {
        if(horas<=8)
        return 'Ponto Normal'
    else
        return 'Fora do horario'
    }
}

console.log(funcionario.baterPonto(8))
