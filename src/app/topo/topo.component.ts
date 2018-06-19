import { Component } from "@angular/core";

@Component({
    // Passar component como atributo ex. <div app-topo> usa [app-topo] com a chave com o selector  
    // Para usar como classe basta colocar . na frente do conteudo do no nosso seletor (possui conflito com classes css)
    selector: 'app-topo', 
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {

    public titulo : string = 'Aprendendo Inglês';
}