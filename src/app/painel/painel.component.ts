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

  resposta : string = '';  
  rodada : number = 0;
  rodadaFrase : Frase;

  progresso : number = 0;

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada];
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
      this.rodadaFrase = this.frases[this.rodada];
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = ''; 
    } else {
      alert('Você não acertou desta vez! Tente novamente.');
    }
  }
}
