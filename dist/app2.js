"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = require("./Pessoa");
//criar carros
var carroA = new Carro_1.default('Gol', 4);
var carroB = new Carro_1.default('Polo', 4);
var carroC = new Carro_1.default('Celta', 2);
var carroD = new Carro_1.default('Versa', 4);
//let listaCarros: Array<Carro> = [carroA, carroB, carroC, carroD];
var listaCarros = [carroA, carroB, carroC, carroD];
//criar concessionária
var concessionaria = new Concessionaria_1.Concesionaria('Av Paulista', listaCarros);
//console.log(concessionaria.mostrarListaDeCarros());
//comprar o carro
var cliente = new Pessoa_1.Pessoa('Ana', 'Versa');
//loop em cada uma das posições do array
concessionaria.mostrarListaDeCarros().map(function (carro) {
    //console.log(carro);
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
