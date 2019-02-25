import { ConcessionariaDao } from './ConcessionariaDao';
import { Concesionaria } from './concessionaria';

let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concesionaria('Av ', []);
concessionariaDao.inserir(concessionaria);