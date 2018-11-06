import { Pet } from "./Pet";

export class PetShop {

  private petList: Pet[] = [];

  addPets(pets: Pet[]) {
    this.petList = this.petList.concat(pets);
  }

  getAll(){
    return this.petList;
  }

  getSomeType(type: any) {
    return this.petList.filter((value) => {
      return value instanceof type;
    });
  }

  getGreaterAveragePrice() {
		let prices = this.petList.map(pet => pet.price);
		let average = (prices.reduce((current, next) => current + next))/prices.length;
		let expensivePets = this.petList.filter(pet => pet.price > average);

		return expensivePets;
  }

  getFluffyOrWhite() {
    return this.petList.filter((value) => {
      return value.fluffyOrWhite();
    });
  }

}