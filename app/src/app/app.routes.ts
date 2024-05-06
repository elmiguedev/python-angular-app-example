import { Routes } from '@angular/router';
import { DogsPage } from './pages/dogs/dogs.page';
import { HomePage } from './pages/home/home.page';
import { NewDogPage } from './pages/new-dog/new-dog.page';

export const routes: Routes = [
    { path: "", component: HomePage },
    { path: "dogs", component: DogsPage },
    { path: "dogs/new", component: NewDogPage },
];
