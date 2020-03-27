//Só pode haver um export default por arquivo ts
export default class Veiculo {
    protected modelo: string = ""
    protected velocidade: number = 0

    public acelerar():void {
        this.velocidade = this.velocidade + 10
    }

    public parar():void {
        this.velocidade = 0
    }

    public velocidadeAtual():number {
        return this.velocidade
    }

    public getModelo(): string {
        return this.modelo
    }
}