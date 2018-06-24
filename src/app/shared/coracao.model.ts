
export class Coracao {

    constructor(
        public cheio : boolean = true, 
        public urlCoracaoCheio : string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio : string = '/assets/coracao_vazio.png'
    ) { }

    public exibirCoracao() {
        return this.cheio ? this.urlCoracaoCheio : this.urlCoracaoVazio;
    }
}