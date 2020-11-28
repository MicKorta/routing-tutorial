/**
 * The routing tutorial program implements a sample application that illustrates different
 * possibilities for navigation within an Angular application.
 *
 * AppComponent has been replaced by the Home component as the start page of the application.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'routing-tutorial';
}
