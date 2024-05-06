import { Component } from '@angular/core';
import { Dog } from '../../domain/Dog';
import { DogService } from '../../services/dog.service';

@Component({
    selector: 'dogs-page',
    templateUrl: './dogs.page.html',
    styleUrl: './dogs.page.css'
})
export class DogsPage {
    dogs: Dog[] = [];

    ngOnInit() {
        this.dogs = DogService.getInstance().getAll();
    }
}
