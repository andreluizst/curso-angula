"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./domain/entities/carro"));
const moto_1 = __importDefault(require("./domain/entities/moto"));
const concessionaria_1 = __importDefault(require("./domain/entities/concessionaria"));
let carro = new carro_1.default("Veloster", 3);
let moto = new moto_1.default("Ninja");
let concessionaria = new concessionaria_1.default("", []);
console.log(carro);
console.log(moto);
moto.acelerar();
console.log(moto);
console.log(concessionaria.horariosFuncionamento());
