"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
//Só pode haver um export default por arquivo ts
class Carro extends veiculo_1.default {
    constructor(modelo, portas) {
        super();
        this.modelo = modelo;
        this.portas = portas;
    }
    getPortas() {
        return this.portas;
    }
}
exports.default = Carro;
