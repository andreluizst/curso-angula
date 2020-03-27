"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Só pode haver um export default por arquivo ts
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carros = new Array();
    }
    getNome() {
        return this.nome;
    }
    getCarroPreferido() {
        return this.carroPreferido;
    }
    getCarros() {
        return this.carros;
    }
    comprarCarro(carro) {
        this.carros.push(carro);
    }
}
exports.default = Pessoa;
exports.qualquerCoisa = "Teste de exportação de constante";
exports.putaQuePariu = "Palavrão";
