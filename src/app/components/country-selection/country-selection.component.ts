import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICountry } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html'
})
export class CountrySelectionComponent {

  //#region Properties

  @Input() countryList: ICountry[];
  @Output() countryChanged = new EventEmitter<string>();

  //#endregion
  
  //#region Ng Core
  
  constructor() { 
    this.countryList = [];
  }

  //#endregion

  //#region Events

  /**
   * Handle change country
   * @param event Selected country Id
   */
  countryValueChanged(event: any): void {
    this.countryChanged.emit(event.value)
  }

  //#endregion

}
