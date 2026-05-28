import { Routes } from '@angular/router';
import { ListingPage } from './listing-page/listing-page';

export const routes: Routes = [
    { path: 'listings', component: ListingPage, pathMatch: 'full' },
];
