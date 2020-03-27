"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = __importDefault(require("../entities/concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = "tb_concessionaria";
    }
    inserir(object) {
        console.log("Objeto inserido");
        return true;
    }
    atualizar(object) {
        console.log("Objeto atualizado");
        return true;
    }
    remover(id) {
        console.log("Objeto removido");
        return new concessionaria_1.default("", []);
    }
    selecionar(id) {
        console.log("Nenhum objeto selecionado");
        return new concessionaria_1.default("", []);
    }
    selecionarTodos() {
        console.log("Objetos listados");
        return [new concessionaria_1.default("", [])];
    }
}
exports.default = ConcessionariaDao;
