import {GenericDaoI} from "../interfaces/daoInterface"

export default class DAO<T> implements GenericDaoI<T> {
    nomeTabela: string = "tb_"
    
    public inserir(object: T): boolean{
        console.log("Objeto inserido")
        return true
    }

    public atualizar(object: T): boolean{
        console.log("Objeto atualizado")
        return true
    }

    public remover(id: number): T{
        console.log("Objeto removido")
        return Object()
    }

    public selecionar(id: number): T{
        console.log("Nenhum objeto selecionado")
        return Object()
    }
    public selecionarTodos(): [T]{
        console.log("Objetos listados")
        return [Object()]
    }
}