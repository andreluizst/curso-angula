"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Só pode haver um export default por arquivo ts
class Concessionaria {
    constructor(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    getEndereco() {
        return this.endereco;
    }
    getListaCarros() {
        return this.listaCarros;
    }
    vederCarro(cliente, modeloCarro) {
        let compraEfetuada = false;
        this.getListaCarros().map((carro) => {
            //console.log(carro)
            if (carro.getModelo() == modeloCarro) {
                console.log("Temos o carro modelo " + modeloCarro + " disponível em estoque.");
                console.log("Efetuando venda...");
                cliente.comprarCarro(carro);
                compraEfetuada = true;
            }
        });
        if (compraEfetuada) {
            console.log("Venda efetuada com sucesso!");
        }
        else {
            console.log("Infelizmente não temos o modelo " + modeloCarro + ".");
        }
    }
    horariosFuncionamento() {
        return "De segunda a sexta das 08:00 ás 18:00 e sábado das 08:00 ás 12:00";
    }
}
exports.default = Concessionaria;
