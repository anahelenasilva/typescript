"use strict";
//import { create } from "domain";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, size) {
        this.name = name;
        this.size = size;
    }
    return Animal;
}());
exports.Animal = Animal;
var animal;
function createAnimal(name, size) {
    return new Animal(name, size);
}
animal = createAnimal('Canine', 500);
