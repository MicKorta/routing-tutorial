/**
 * Home component serves as the start page of the application
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private router: Router) {
    // NOOP
  }

  /**
   *  Navigates to the given destination.
   *
   * @param destination The destination within this application to navigate at.
   */
  public navigate(destination: string): void {
    this.router.navigate([destination]);
  }
}
