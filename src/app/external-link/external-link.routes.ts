/**
 * The purpose of this component is to demonstrate how navigation to
 * outside of an Angular application can be implemented.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { ExternalLinkComponent } from './external-link.component';
import { Routes } from '@angular/router';

export const ExternalLinkRoutes: Routes = [
  {
    path: 'external-link',
    component: ExternalLinkComponent,
  },
];
