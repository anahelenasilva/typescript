"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'Concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('insert');
        return true;
    };
    ConcessionariaDao.prototype.alterar = function (object) {
        console.log('update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('delete');
        return new Concessionaria_1.Concesionaria('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('select by id');
        return new Concessionaria_1.Concesionaria('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('select all');
        return [new Concessionaria_1.Concesionaria('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
