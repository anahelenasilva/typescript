"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('insert');
        return true;
    };
    Dao.prototype.alterar = function (object) {
        console.log('update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('select by id');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('select all');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
