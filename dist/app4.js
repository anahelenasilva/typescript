"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var concessionaria_1 = require("./concessionaria");
var concessionariaDao = new ConcessionariaDao_1.ConcessionariaDao();
var concessionaria = new concessionaria_1.Concesionaria('Av ', []);
concessionariaDao.inserir(concessionaria);
