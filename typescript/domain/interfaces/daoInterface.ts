export interface DaoI {
    nomeTabela: string

    inserir(object: any): boolean
    atualizar(object: any): boolean
    remover(id: number): any
    selecionar(id: number): any
    selecionarTodos(): [any]
}

export interface GenericDaoI<T> {
    nomeTabela: string

    inserir(object: T): boolean
    atualizar(object: T): boolean
    remover(id: number): T
    selecionar(id: number): T
    selecionarTodos(): [T]
}