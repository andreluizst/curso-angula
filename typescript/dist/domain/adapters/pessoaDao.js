"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("../entities/pessoa"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = "tb_pessoa";
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
        return new pessoa_1.default("José", "Ferrari");
    }
    selecionar(id) {
        console.log("Nenhum objeto selecionado");
        return new pessoa_1.default("José", "Ferrari");
    }
    selecionarTodos() {
        console.log("Objetos listados");
        return [new pessoa_1.default("José", "Ferrari")];
    }
}
exports.default = ConcessionariaDao;
