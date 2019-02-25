//import { ConcessionariaDao } from './ConcessionariaDao';

import { Concesionaria } from './concessionaria';
import { Dao } from './Dao';

//let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();

let concessionaria = new Concesionaria('Av ', []);

let dao: Dao<Concesionaria> = new Dao()
dao.inserir(concessionaria);