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
  
  rodada : number = 0;
  rodadaFrase : Frase;
  resposta : string;

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
      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada];
      this.progresso += (100 / this.frases.length); 
    }
  }
}
