/**
 * The routing tutorial program implements a sample application that illustrates different
 * possibilities for navigation within an Angular application.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { DataSourceRoutes } from './data/data-source/data-source.routes';
import { DataDestinationRoutes } from './data/data-destination/data-destination.routes';
import { ObjectSourceRoutes } from './object/object-source/object-source.routes';
import { ObjectDestinationRoutes } from './object/object-destination/object-destination.routes';
import { ExternalLinkRoutes } from './external-link/external-link.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...DataSourceRoutes,
  ...DataDestinationRoutes,
  ...ObjectSourceRoutes,
  ...ObjectDestinationRoutes,
  ...ExternalLinkRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // NOOP
}
