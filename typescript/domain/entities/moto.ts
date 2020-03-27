import Veiculo from "./veiculo"

export default class Moto extends Veiculo {

    constructor(modelo: string) {
        super()
        this.modelo = modelo
    }

    public acelerar() {
        this.velocidade = this.velocidade + 20
    }
}