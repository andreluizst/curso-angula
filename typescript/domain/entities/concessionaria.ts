import {ConcessionariaI} from "../interfaces/concessionariaInterface"
import Pessoa from "./pessoa"
import Carro from "./carro"

//Só pode haver um export default por arquivo ts
export default class Concessionaria implements ConcessionariaI {
    private endereco: string
    private listaCarros: Array<Carro>

    constructor(endereco: string, listaCarros: Array<Carro>){
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    public getEndereco(): string {
        return this.endereco
    }

    public getListaCarros(): Array<Carro> {
        return this.listaCarros
    }

    public vederCarro(cliente: Pessoa, modeloCarro: string): void {
        let compraEfetuada = false
        this.getListaCarros().map((carro: Carro) => {
            //console.log(carro)
            if (carro.getModelo() == modeloCarro){
                console.log("Temos o carro modelo " + modeloCarro + " disponível em estoque." )
                console.log("Efetuando venda...")
                cliente.comprarCarro(carro)
                compraEfetuada = true
            }
        })
        if (compraEfetuada){
            console.log("Venda efetuada com sucesso!")
        }else{
            console.log("Infelizmente não temos o modelo " + modeloCarro + ".")
        }
    }

    public horariosFuncionamento(): string {
        return "De segunda a sexta das 08:00 ás 18:00 e sábado das 08:00 ás 12:00"
    }
}