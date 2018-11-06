export class Pet {
	color: string;
	price: number;


	constructor(color: string, price: number) {
		this.color = color;
		this.price = price;
	}

	fluffyOrWhite() {
		return this.isColor('white') || this.isFluffy();
	}

	isFluffy() {
		return  ;
	} 

	isColor(_color: string) {
		return this.color === _color;
	}
	
};