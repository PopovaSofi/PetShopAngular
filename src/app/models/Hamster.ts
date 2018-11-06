import {Pet} from "./Pet";

export class Hamster extends Pet {
	color : string;
    price : number;
    fluffy : boolean;
    
	constructor (color : string, price : number, fluffy : boolean) {
        super(color, price);
    	this.fluffy = fluffy;	
	}

	isFluffy () {
		return this.fluffy === true ? true : false;
	}
	
	toString () {
		return `🐹 ${this.color}, price: ${this.price},  is fluffy: ${this.fluffy}`
	}
};