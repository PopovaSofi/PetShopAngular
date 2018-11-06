import { Pet } from "./Pet";

export class Cat extends Pet {
    color: string;
    price: number;
    name: string;
    fluffy: boolean;

    constructor(color: string, price: number, name: string, fluffy: boolean) {
        super(color, price);
        this.name = name;
        this.fluffy = fluffy;
    }

    isFluffy() {
        return this.fluffy === true ? true : false;
    }

    toString() {
        return `Name: ${this.name}, color: ${this.color},  price: ${this.price},  is fluffy:  ${this.fluffy}`
    }
};