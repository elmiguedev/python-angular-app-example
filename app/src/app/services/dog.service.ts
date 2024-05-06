import { Dog } from "../domain/Dog";

export class DogService {
  private static instance: DogService;
  private dogs: Dog[] = [];

  private constructor() {
  }

  public static getInstance() {
    if (!DogService.instance) {
      DogService.instance = new DogService();
    }
    return DogService.instance;
  }

  public getAll() {
    return this.dogs;
  }

  public add(dog: Dog) {
    console.log(dog);
    console.log(this.dogs)
    this.dogs.push(dog);
  }
}