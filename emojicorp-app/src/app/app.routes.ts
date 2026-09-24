import { Routes } from '@angular/router';
import { Animals } from '../Pagine/animals/animals';
import { Fruits } from '../Pagine/fruits/fruits';
import { Generic } from '../Pagine/generic/generic'; 

export const routes: Routes = [
    { path: '', redirectTo: '/animals', pathMatch: 'full' }, // Redirect iniziale
    { path: 'animals', component: Animals },
    { path: 'fruits', component: Fruits },
    { path: 'generic/:id', component: Generic }


];
