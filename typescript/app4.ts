import Concessionaria from "./domain/entities/concessionaria"
import ConcessionariaDao from "./domain/adapters/concessionariaDAO"
import PessoaDao from "./domain/adapters/pessoaDao"
import Pessoa from "./domain/entities/pessoa"
import DAO from "./domain/adapters/dao"

let daoConcessionaria: ConcessionariaDao = new ConcessionariaDao()
let daoPessoa: PessoaDao = new PessoaDao()
let concessionaria: Concessionaria = new Concessionaria("", [])
let pessoa: Pessoa = new Pessoa("José", "Ferrari")

let daoG1: DAO<Concessionaria> = new DAO<Concessionaria>()
let daoG2: DAO<Pessoa> = new DAO<Pessoa>()

daoConcessionaria.inserir(concessionaria)
daoPessoa.inserir(pessoa)

daoG1.inserir(concessionaria)
daoG2.inserir(pessoa)
daoG2.atualizar(pessoa)