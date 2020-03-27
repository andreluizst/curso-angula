import Carro from "./domain/entities/carro"
import Moto from "./domain/entities/moto"
import Concessionaria from "./domain/entities/concessionaria"

let carro = new Carro("Veloster", 3)
let moto = new Moto("Ninja")
let concessionaria = new Concessionaria("", [])

console.log(carro)
console.log(moto)
moto.acelerar()
console.log(moto)
console.log(concessionaria.horariosFuncionamento())