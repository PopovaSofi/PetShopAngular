import {Pet} from "./Pet";

export class Dog extends Pet {
	color : string;
    price : number;
    name : string;
    
	constructor (color : string, price : number, name : string) {
        super(color, price);
        this.name = name;
    }
	 toString () {
        return `Name: ${this.name}, color: ${this.color},  price: ${this.price} `
    }
};