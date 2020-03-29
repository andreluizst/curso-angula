//Exeplo de uma declaração comum de classe com atributo e um contrutor que inicializa esses atributos
export class FraseVerbosa {
    public fraseEng: string
    public frasePtBr: string

    constructor(fraseEng: string, frasePtBr: string) {
        this.fraseEng = fraseEng
        this.frasePtBr = frasePtBr
    }
}

//A declaração abaixo gera o mesmo resultado da declaração acima, com a vantagem de ser menos verbosa
//Ao utilizar o operador de visibilidde "public" no parâmetro do contrutor, info ao angular que esse parâmetro
//é um atributo publico da classe frase, e o angular irá cirá-los e inicializá-los com os valores recebido
export class Frase {
    constructor(public fraseEng: string, public frasePtBr: string) {}
}