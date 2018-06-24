import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  coracoes : Coracao[] = [
    new Coracao(),
    new Coracao(),
    new Coracao()
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
