import Carro from "./carro"

//Só pode haver um export default por arquivo ts
export default class Pessoa {
    private nome: string
    private carroPreferido: string
    private carros: Array<Carro>

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carros = new Array<Carro>()
    }

    public getNome(): string{
        return this.nome
    }

    public getCarroPreferido(): string {
        return this.carroPreferido
    }

    public getCarros(): Array<Carro> {
        return this.carros
    }

    public comprarCarro(carro: Carro): void {
        this.carros.push(carro)
    }
}

export const qualquerCoisa = "Teste de exportação de constante"
export const putaQuePariu = "Palavrão"