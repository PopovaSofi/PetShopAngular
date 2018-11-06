import { Input, Component } from '@angular/core';
import { Pet } from  "./models//Pet";

@Component({
    selector: 'pet-list',
    template: ` 
                <ul>
                    <li *ngFor="let pet of pets">{{pet.toString()}}</li>
                    
                </ul>`,
    styles: [`
    ul {
    font-family: 'Comic Sans MS', cursive, sans-serif; 
    font-size: 120%;
    margin: 20px;
    padding: 30px;
    width: 40%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid #ebebeb;
    border-radius: 20px;
    box-sizing: border-box;
    background: #FFFACD;
    transition: all 0.2s linear;
}
`]
})

export class PetListComponent { 
    @Input() pets: Pet[];
    @Input() title : string;
}