import { create } from "domain";

export class Animal { 
  constructor(public name: string, public size: number) { }
}

let animal: Animal;

function createAnimal(name: string, size: number): Animal {
  return new Animal(name, size);
}

animal = createAnimal('Canine', 500);

//teste3
