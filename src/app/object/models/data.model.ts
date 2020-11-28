/**
 * This class provides a possibility to store temporarily data.
 * The instantiation of an object can occure as constructor injection,
 * so that within the application only one single instance of this class exists.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { Injectable } from '@angular/core';

@Injectable()
export class Data {
  public storage: any;

  public constructor() {
    // NOOP
  }
}
