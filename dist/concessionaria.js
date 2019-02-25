"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concesionaria = /** @class */ (function () {
    function Concesionaria(endereco, listaDeCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concesionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concesionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concesionaria.prototype.fornecerHorariosFuncionamento = function () {
        return 'De segunda a sexta das 08:00 às 18:00';
    };
    return Concesionaria;
}());
exports.Concesionaria = Concesionaria;
/*var concessionaria = new Concesionaria('Av Paulista');
console.log(concessionaria);*/
