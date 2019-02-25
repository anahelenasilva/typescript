import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    private numeroDePortas: number = 0;

    constructor(modelo: string, numeroDePortas: number) {
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
}

/*let carroA = new Carro('Gol', 4);
console.log(carroA);

carroA.acelerar();
carroA.acelerar();
carroA.acelerar();
console.log(carroA);

carroA.parar();
console.log(carroA);*/
