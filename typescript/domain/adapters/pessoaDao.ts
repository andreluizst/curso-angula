import {DaoI} from "../interfaces/daoInterface"
import Pessoa from "../entities/pessoa"

export default class ConcessionariaDao implements DaoI {
    nomeTabela: string = "tb_pessoa"

    public inserir(object: Pessoa): boolean{
        console.log("Objeto inserido")
        return true
    }

    public atualizar(object: Pessoa): boolean{
        console.log("Objeto atualizado")
        return true
    }

    public remover(id: number): Pessoa{
        console.log("Objeto removido")
        return new Pessoa("José", "Ferrari")
    }

    public selecionar(id: number): Pessoa{
        console.log("Nenhum objeto selecionado")
        return new Pessoa("José", "Ferrari")
    }
    public selecionarTodos(): [Pessoa]{
        console.log("Objetos listados")
        return [new Pessoa("José", "Ferrari")]
    }
}