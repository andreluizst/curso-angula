import Veiculo from "./veiculo"

//Só pode haver um export default por arquivo ts
export default class Carro extends Veiculo {
    private portas: number

    constructor(modelo: string, portas: number) {
        super()
        this.modelo = modelo
        this.portas = portas
    }

    public getPortas(): number {
        return this.portas
    }
}