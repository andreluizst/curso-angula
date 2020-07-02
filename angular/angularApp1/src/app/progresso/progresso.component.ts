import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges {
  @Input() public progresso: number

  @Input() public statusJogo: string = "resultado do jogo"

  constructor() {
    this.progresso = 0
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.statusJogo)
  }

  ngOnInit(): void {
  }

}
