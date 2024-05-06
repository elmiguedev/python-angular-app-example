import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dog } from '../../domain/Dog';
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { DogService } from '../../services/dog.service';

@Component({
  standalone: true,
  selector: 'new-dog-page',
  templateUrl: './new-dog.page.html',
  styleUrl: './new-dog.page.css',
  imports: [CommonModule, ReactiveFormsModule]
})
export class NewDogPage {
  name = new FormControl("");
  age = new FormControl(0);

  public saveDog() {
    if (this.name.value !== null && this.age.value !== null) {

      const newDog: Dog = {
        id: 0,
        name: this.name.value,
        age: this.age.value
      }

      DogService.getInstance().add(newDog);

    }
  }
}
