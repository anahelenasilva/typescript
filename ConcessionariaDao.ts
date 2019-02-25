import { Concesionaria } from './Concessionaria';
import { DaoInterface } from './DaoInterface';

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'Concessionaria';

    inserir(object: Concesionaria): boolean {
        console.log('insert');
        return true;
    }
    alterar(object: Concesionaria): boolean {
        console.log('update');
        return true;
    }
    remover(id: number): Concesionaria {
        console.log('delete');
        return new Concesionaria('', []);
    }
    selecionar(id: number): Concesionaria {
        console.log('select by id');
        return new Concesionaria('', []);
    }
    selecionarTodos(): [Concesionaria] {
        console.log('select all');
        return [new Concesionaria('', [])];
    }
}