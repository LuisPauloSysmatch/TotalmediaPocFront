import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CountryVATRate, ICountryVATRate } from 'src/app/models/country-vat-rate.model';

@Component({
  selector: 'app-vat-rate-selection',
  templateUrl: './vat-rate-selection.component.html'
})
export class VatRateSelectionComponent implements OnChanges {

  //#region Properties

  @Input() countryVATRateList: ICountryVATRate[];
  @Output() countryVATRateChanged = new EventEmitter<number>();
  selectedVat:ICountryVATRate;

  //#endregion

  //#region NG Core

  constructor() { 
    this.countryVATRateList = [];
    this.selectedVat = new CountryVATRate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'countryVATRateList':
            this.selectedVat = this.countryVATRateList[0];
            break;
          default:
            break;
        }
      }
    }
  }

  //#endregion

  //#region Events

  /**
   * Handle change vat rate
   */
  countryVATRateValueChanged(): void {
    this.countryVATRateChanged.emit(this.selectedVat.countryVATRateValue)
  }

  //#endregion

}
