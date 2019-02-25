import Carro from './Carro';

export class Pessoa {
    private nome: string = '';
    private carroPreferido: string = '';
    private carro: Carro;

    constructor(nome: string, carroPreferido: string){
        this.nome = nome;
        this.carro = new Carro(carroPreferido, 4);
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}

/*let pessoa = new Pessoa('Ana', 'Gol');
console.log(pessoa.dizerCarroPreferido());*/
