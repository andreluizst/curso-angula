import Concessionaria from "./domain/entities/concessionaria"
import Pessoa, {qualquerCoisa, putaQuePariu as pqp} from './domain/entities/pessoa'
import Carro from "./domain/entities/carro"

let carro = new Carro("Veloster", 3)
let carros: Array<Carro> = [
    new Carro("Dodge Journey", 4),
    new Carro("Veloster", 3),
    new Carro("Cerato", 4)
]
let concessionaria = new Concessionaria("Av Recife", carros)
let cliente = new Pessoa("José", "Veloster")
console.log(carro)
carro.acelerar()
console.log(carro)
carro.acelerar()
carro.acelerar()
console.log("A velocidade atual é: " + carro.velocidadeAtual())
console.log("Parando o carro...")
carro.parar()
console.log("A velocidade atual é: " + carro.velocidadeAtual())

console.log("==============/////////////////===================")
console.log("Exibindo concessionária...")
console.log(concessionaria)
console.log("Exibindo dados do cliente...")
console.log(cliente)

concessionaria.getListaCarros().map((carro: Carro) => {
    //console.log(carro)
    if (carro.getModelo() == cliente.getCarroPreferido()){
        console.log("Temos o carro modelo " +carro.getModelo() + " que é de sua preferência em estoque." )
        console.log("Efetuando venda...")
        cliente.comprarCarro(carro)
    }
})

concessionaria.vederCarro(cliente, "Dodge Journey")
console.log("Exibindo dados do cliente...")
console.log(cliente)
concessionaria.vederCarro(cliente, "Fusca")
console.log("Exibindo dados do cliente...")
console.log(cliente)
console.log(qualquerCoisa)
console.log(pqp)