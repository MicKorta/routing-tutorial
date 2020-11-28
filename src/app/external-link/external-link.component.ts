/**
 * The purpose of this component is to demonstrate how navigation to
 * outside of an Angular application can be implemented.
 *
 * @author   micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { Component } from '@angular/core';

@Component({
  templateUrl: './external-link.component.html',
})
export class ExternalLinkComponent {

  /**
   *  Navigates to a location outside this application.
   */
  public navigate(): void {
    window.location.href = 'https://www.google.com/logos/2010/pacman10-i.html';
  }
}
