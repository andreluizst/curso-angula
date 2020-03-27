"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DAO {
    constructor() {
        this.nomeTabela = "tb_";
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
        return Object();
    }
    selecionar(id) {
        console.log("Nenhum objeto selecionado");
        return Object();
    }
    selecionarTodos() {
        console.log("Objetos listados");
        return [Object()];
    }
}
exports.default = DAO;
