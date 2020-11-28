/**
 * The purpose of this component is to demonstrate how to access an object
 * provided during routing, within the application.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { Component } from '@angular/core';
import { ComplexModel } from '../models/complex.model';
import { Data } from '../models/data.model';
import { Inject } from '@angular/core';

@Component({
  templateUrl: './object-destination.component.html',
})
export class ObjectDestinationComponent {
  private _complexModel: ComplexModel;

  /**
   * INITIALIZATION
   *
   * @param data Is injected and references a single application global instance
   */
  constructor(@Inject(Data) data: Data) {
    this._complexModel = data.storage;
  }

  /**
   * @readonly
   * @type {ComplexModel}
   * @memberof ObjectDestinationComponent
   */
  get complexModel(): ComplexModel {
    return this._complexModel;
  }
}
