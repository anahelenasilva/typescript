import { Concesionaria } from './Concessionaria';
import Carro from './Carro';
import { Pessoa } from "./Pessoa";

//criar carros
let carroA = new Carro('Gol', 4);
let carroB = new Carro('Polo', 4);
let carroC = new Carro('Celta', 2);
let carroD = new Carro('Versa', 4);

//let listaCarros: Array<Carro> = [carroA, carroB, carroC, carroD];
let listaCarros: Carro[] = [carroA, carroB, carroC, carroD];

//criar concessionária
var concessionaria = new Concesionaria('Av Paulista', listaCarros);

//console.log(concessionaria.mostrarListaDeCarros());

//comprar o carro
let cliente = new Pessoa('Ana', 'Versa');

//loop em cada uma das posições do array
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    //console.log(carro);
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());