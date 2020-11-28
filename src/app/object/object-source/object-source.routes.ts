/**
 * This component is used to create an instance of a complex model with the goal
 * of making it available to another component, ObjectDestination.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { ObjectSourceComponent } from './object-source.component';
import { Routes } from '@angular/router';

export const ObjectSourceRoutes: Routes = [
  { path: 'object-source', component: ObjectSourceComponent },
];
