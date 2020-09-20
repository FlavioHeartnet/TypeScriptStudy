"use strict";
let funcionario = {
    supervisores: ['Jose', 'Carlos'],
    baterPonto(horas) {
        if (horas <= 8)
            return 'Ponto Normal';
        else
            return 'Fora do horario';
    }
};
console.log(funcionario.baterPonto(8));
