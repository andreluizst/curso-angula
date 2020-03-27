import {DaoI} from "../interfaces/daoInterface"
import Concessionaria from "../entities/concessionaria"

export default class ConcessionariaDao implements DaoI {
    nomeTabela: string = "tb_concessionaria"

    public inserir(object: Concessionaria): boolean{
        console.log("Objeto inserido")
        return true
    }

    public atualizar(object: Concessionaria): boolean{
        console.log("Objeto atualizado")
        return true
    }

    public remover(id: number): Concessionaria{
        console.log("Objeto removido")
        return new Concessionaria("", [])
    }

    public selecionar(id: number): Concessionaria{
        console.log("Nenhum objeto selecionado")
        return new Concessionaria("", [])
    }
    public selecionarTodos(): [Concessionaria]{
        console.log("Objetos listados")
        return [new Concessionaria("", [])]
    }
}