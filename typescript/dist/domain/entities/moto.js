"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
class Moto extends veiculo_1.default {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }
    acelerar() {
        this.velocidade = this.velocidade + 20;
    }
}
exports.default = Moto;
