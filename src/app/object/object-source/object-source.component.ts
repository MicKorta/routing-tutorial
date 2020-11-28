/**
 * This component is used to create an instance of a complex model with the goal
 * of making it available to another component, ObjectDestination.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { Component } from '@angular/core';
import { ComplexModel } from '../models/complex.model';
import { Data } from '../models/data.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './object-source.component.html',
})
export class ObjectSourceComponent {
  private _complexModel: ComplexModel;

  /**
   * INITIALIZATION
   *
   * @param {Data} _data Is injected and references a single application global instance
   * @param {Router} _router A service that provides navigation among views and URL manipulation capabilities
   */
  constructor(private _data: Data, private _router: Router) {
    this._complexModel = new ComplexModel('string', new Date(), true, 1000);
  }

  /**
   * Stores the class global object complexModel into the application global memory and forwards it to the component ObjectDestination.
   */
  public navigate(): void {
    this._data.storage = this._complexModel;
    this._router.navigate(['/object-destination']);
  }
}
