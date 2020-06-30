import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number
  public coracoes: Coracao[] = []


  constructor() { 
    this.coracoes = [
      new Coracao(true),
      new Coracao(true),
      new Coracao(true)
    ]
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.tentativas != this.coracoes.length){
      let index = this.coracoes.length - this.tentativas
      this.coracoes[index -1].cheio = false
    }else{
      this.coracoes = [
        new Coracao(true),
        new Coracao(true),
        new Coracao(true)
      ]
    }
  }

  ngOnInit(): void {
  }

  public esvaziaCoracao(){
    
  }

}
