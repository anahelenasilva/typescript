export interface DaoInterface<T> {
    nomeTabela: string;

    inserir(object: T): boolean;
    alterar(object: T): boolean;
    remover(id: number): T;
    selecionar(id: number): T;
    selecionarTodos(): [T];
}