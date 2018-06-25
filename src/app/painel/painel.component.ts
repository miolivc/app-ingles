import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  instrucao : string = 'Traduza a frase:';
  frases : Frase[] = FRASES;

  resposta : string;  
  rodada : number = 0;
  rodadaFrase : Frase;

  progresso : number = 0;
  tentativas : number = 3;

  @Output() encerrarJogo : EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.atualizarRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta : Event) : void {
    this.resposta = (<HTMLInputElement> resposta.target).value;
  }

  public verificarResposta() : void {
    if (this.resposta == this.rodadaFrase.frasePtBr) {
      alert('Parabéns! Sua resposta está correta.');
      this.rodada++;
      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitória');
      } else {
        this.atualizarRodada();
      }
      this.progresso = this.progresso + (100 / this.frases.length);
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  private atualizarRodada() : void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = ''; 
  }
}
