import { DaoInterface } from './DaoInterface';

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';
    
    inserir(object: T): boolean {
        console.log('insert');
        return true;
    }
    alterar(object: T): boolean {
        console.log('update');
        return true;
    }
    remover(id: number): T {
        console.log('delete');
        return Object();
    }
    selecionar(id: number): T {
        console.log('select by id');
        return Object();
    }
    selecionarTodos(): [T] {
        console.log('select all');
        return [Object()];
    }
}