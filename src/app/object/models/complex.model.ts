/**
 * The purpose of this class is to provide an object which consists of different data types.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

export class ComplexModel {
  constructor(
    private _string: string,
    private _date: Date,
    private _boolean: boolean,
    private _number: number
  ) {
    // NOOP
  }

  get string(): string {
    return this._string;
  }

  get date(): Date {
    return this._date;
  }

  get boolean(): boolean {
    return this._boolean;
  }

  get number(): number {
    return this._number;
  }
}
