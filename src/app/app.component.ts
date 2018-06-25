import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jogoEmAndamento : boolean = true;
  mensagem : string;
  tipo : string;

  public encerrarJogo(tipo : string) {
    this.tipo = tipo;
    this.jogoEmAndamento = false;
    if (tipo === 'derrota') {
      this.mensagem = "Jogo finalizado! Você perdeu! :(";
    } else {
      this.mensagem = "Parabéns! Você conseguiu finalizar o jogo!";
    }
  }
}
