import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from "../shared/frase.model"
import { FRASES } from "./frase-mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Array<Frase>
  public instrucao: string
  public resposta: string
  public rodada: number
  public rodadaFrase: Frase
  public progresso: number
  public tentativas: number
  public resultadoJogo: string
  @Output() public onStatusChange: EventEmitter<string> = new EventEmitter<string>()
  

  constructor() {
    this.frases = FRASES
    this.instrucao = "Traduza a frase:"
    this.iniciarRodadas()
  }

  ngOnInit(): void {
    this.onStatusChange.emit("jogo iniciado")
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta(): void {
    console.log("verificar resposta: ", this.resposta.toLowerCase())
    if (this.rodadaFrase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()){
      if (this.rodada < this.frases.length){
        this.rodada++
      }
      this.progresso = (this.rodada / this.frases.length)*100
      if (this.rodada <= this.frases.length -1){
        this.atualizaRodada()
      }
    }else{
      if (this.tentativas > -1){
        this.tentativas--
      }
      if (this.tentativas == -1){
        this.onStatusChange.emit("derrota")
        this.iniciarRodadas()
      }
    }
    console.log("Rodada: ", this.rodada)
    console.log("Tentativas: ", this.tentativas)
    if (this.rodada == 4 && this.tentativas > -1){
      this.onStatusChange.emit("vitória")
      this.iniciarRodadas()
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }

  iniciarRodadas(): void {
    this.tentativas = 3
    this.progresso = 0
    this.resposta = ""
    this.rodada = 0
    this.resultadoJogo = ""
    this.atualizaRodada()
  }

}
