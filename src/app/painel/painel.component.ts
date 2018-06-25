import { Component, OnInit } from '@angular/core';

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
        alert('Você ganhou!');
      } else {
        this.atualizarRodada();
      }
      this.progresso = this.progresso + (100 / this.frases.length);
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        alert('Você perdeu!');
      }
    }
  }

  private atualizarRodada() : void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = ''; 
  }
}
