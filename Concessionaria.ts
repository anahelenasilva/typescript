import { ConcesionariaInterface } from './ConcessionariaInterface';
import Carro from './Carro';

export class Concesionaria implements ConcesionariaInterface {
    private endereco: string = '';
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }

    public fornecerHorariosFuncionamento(): string {
        return 'De segunda a sexta das 08:00 às 18:00';
    }
}

/*var concessionaria = new Concesionaria('Av Paulista');
console.log(concessionaria);*/
