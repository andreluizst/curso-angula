"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Só pode haver um export default por arquivo ts
class Veiculo {
    constructor() {
        this.modelo = "";
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
    getModelo() {
        return this.modelo;
    }
}
exports.default = Veiculo;
