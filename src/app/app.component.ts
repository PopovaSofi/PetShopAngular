import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { PetShop } from "./models/PetShop";
import { Cat } from "./models/Cat";
import { Dog } from "./models/Dog";
import { Hamster } from "./models/Hamster";
import { Pet } from "./models//Pet";

@Component({
    selector: 'pet-shop',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class PetShopComponent {
    types: string[] = ['Cat', 'Dog', 'Hamster'];
    list: string;
    exeption: string;
    selectedPets: Pet[];
    petShop: PetShop;
    currentPet = 'Cat';

    constructor () {
        this.petShop = new PetShop();
        this.petShop.addPets([
            new Dog('white', 200, 'Chaky'),
            new Dog('white', 200, 'Bob'),
            new Dog('white', 300, 'Sem'),
            new Cat('black', 250, 'Kitty', true),
            new Cat('black', 250, 'Tom', true),
            new Cat('black', 250, 'Din', false),
            new Hamster('white', 350, true),
            new Dog('red', 400, 'Mick'),
            new Dog('white', 200, 'Luck'),
            new Dog('white', 450, 'Rex'),
            new Cat('red', 550, 'Meow', true),
            new Cat('black', 150, 'Sid', true),
            new Cat('black', 250, 'Fuzzy', false),
            new Hamster('red', 180, true),
            new Dog('white', 200, 'Dog'),
            new Dog('white', 200, 'Max'),
            new Dog('white', 300, 'Vasya'),
            new Cat('black', 250, 'Murzik', true),
            new Cat('black', 250, 'Benya', true),
            new Cat('black', 250, 'Manya', false),
            new Hamster('white', 280, false),
            new Dog('red', 400, 'Bin'),
            new Dog('white', 200, 'Bim'),
            new Dog('white', 450, 'Doggy'),
            new Cat('red', 550, 'Alice', true),
            new Cat('black', 150, 'Kit', true),
            new Cat('black', 250, 'Flafy', false),
            new Hamster('red', 180, true)
        ]);
    }

    showLists (value: string) {
        this.list = value;

        if (value === 'Cats') {
            this.selectedPets = this.petShop.getSomeType(Cat); 
            console.log( this.selectedPets);
        } else if (value === 'ExpensivePets') {
            this.selectedPets = this.petShop.getGreaterAveragePrice();
            console.log( this.selectedPets);
        } else if (value === 'FluffyOrWhite') {
            this.selectedPets = this.petShop.getFluffyOrWhite();
            console.log( this.selectedPets);
        } else if (value === 'AllPets') {
            this.selectedPets = this.petShop.getAll();
            console.log( this.selectedPets);
        }
    }

    addPet(color: string, price: number, name: string, isflufy: boolean) {
        if (this.currentPet === 'Cat') {
            this.petShop.addPets([new Cat (color, price, name, isflufy)]);
        } else if (this.currentPet === 'Dog') {
            this.petShop.addPets([new Dog (color, price, name)]);
        } else if (this.currentPet === 'Hamster') {
            this.petShop.addPets([new Hamster (color, price, isflufy)]);
        }
     }

    listChanged(newPet: string): void {
        this.currentPet = newPet;
    }

}
