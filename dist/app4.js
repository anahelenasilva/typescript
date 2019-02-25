"use strict";
//import { ConcessionariaDao } from './ConcessionariaDao';
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var Dao_1 = require("./Dao");
//let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new concessionaria_1.Concesionaria('Av ', []);
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
