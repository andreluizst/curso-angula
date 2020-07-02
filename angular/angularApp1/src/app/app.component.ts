import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp1';

  public resultadoJogo: string
  public jogoEmAndamento: boolean = true

  public encerrarJogo(status: string): void {
    console.log(status);
    if (status == "derrota" || status == "vitória"){
      this.jogoEmAndamento = false
      this.resultadoJogo = status
    }
  }

  public reiniciarJogo(): void{
    this.jogoEmAndamento = true
    this.resultadoJogo = undefined
  }
}
