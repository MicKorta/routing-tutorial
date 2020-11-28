/**
 * The purpose of this component is to demonstrate how to access an object
 * provided during routing, within the application.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { ObjectDestinationComponent } from './object-destination.component';
import { Routes } from '@angular/router';

export const ObjectDestinationRoutes: Routes = [
  { path: 'object-destination', component: ObjectDestinationComponent },
];
