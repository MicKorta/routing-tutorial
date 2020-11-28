/**
 * Home component serves as the start page of the application
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
