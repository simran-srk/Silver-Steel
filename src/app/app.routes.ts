import {RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

export const routes: Routes = [
    { path: '', component: NavbarComponent },
    { path: 'explore', component: CatalogueComponent },
];
