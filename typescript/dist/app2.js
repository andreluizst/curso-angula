"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = __importDefault(require("./domain/entities/concessionaria"));
const pessoa_1 = __importStar(require("./domain/entities/pessoa"));
const carro_1 = __importDefault(require("./domain/entities/carro"));
let carro = new carro_1.default("Veloster", 3);
let carros = [
    new carro_1.default("Dodge Journey", 4),
    new carro_1.default("Veloster", 3),
    new carro_1.default("Cerato", 4)
];
let concessionaria = new concessionaria_1.default("Av Recife", carros);
let cliente = new pessoa_1.default("José", "Veloster");
console.log(carro);
carro.acelerar();
console.log(carro);
carro.acelerar();
carro.acelerar();
console.log("A velocidade atual é: " + carro.velocidadeAtual());
console.log("Parando o carro...");
carro.parar();
console.log("A velocidade atual é: " + carro.velocidadeAtual());
console.log("==============/////////////////===================");
console.log("Exibindo concessionária...");
console.log(concessionaria);
console.log("Exibindo dados do cliente...");
console.log(cliente);
concessionaria.getListaCarros().map((carro) => {
    //console.log(carro)
    if (carro.getModelo() == cliente.getCarroPreferido()) {
        console.log("Temos o carro modelo " + carro.getModelo() + " que é de sua preferência em estoque.");
        console.log("Efetuando venda...");
        cliente.comprarCarro(carro);
    }
});
concessionaria.vederCarro(cliente, "Dodge Journey");
console.log("Exibindo dados do cliente...");
console.log(cliente);
concessionaria.vederCarro(cliente, "Fusca");
console.log("Exibindo dados do cliente...");
console.log(cliente);
console.log(pessoa_1.qualquerCoisa);
console.log(pessoa_1.putaQuePariu);
