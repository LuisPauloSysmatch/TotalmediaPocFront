import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CountryVATRate } from 'src/app/models/country-vat-rate.model';

import { Country } from 'src/app/models/country.model';
import { UtilsService } from 'src/app/services/utils.service';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {

  //#region Properties

  private componentDestroyed: Subject<boolean>;
  countryList: Country[];
  countryVATRateList: CountryVATRate[];
  currentCountryVATRateList: CountryVATRate[]; 
  currentVATRate: number;

  //#endregion

  //#region Ng core

  constructor(
    private calculatorService: CalculatorService,
    private utilsService: UtilsService
  ) { 
    this.componentDestroyed = new Subject<boolean>();
    this.countryList = [];
    this.countryVATRateList = [];
    this.currentCountryVATRateList = [];
    this.currentVATRate = 0;
  }

  ngOnInit(): void {
    this.onCountryListChanges();
    this.onCountryVATRateListChanges();
    this.GetCountryList();
    this.GetCountryVATRateList();
  }

  ngOnDestroy(): void {
    // emit component destroyed and unsubcribe componentDestroyed subject
    this.componentDestroyed.next(true);
    this.componentDestroyed.unsubscribe();
  }

  //#endregion

  //#region Events

  /**
   * Subscribe Country list changes
   */
  private onCountryListChanges(): void {
    this.calculatorService.countryList.pipe(takeUntil(this.componentDestroyed)).subscribe(countryList => {
      this.countryList = countryList;
      this.startVatRates();
    });
  }

  /**
   * Subscribe Country VAT rate list changes
   */
  private onCountryVATRateListChanges(): void {
    this.calculatorService.countryVATRateList.pipe(takeUntil(this.componentDestroyed)).subscribe(countryVATRateList => {
      this.countryVATRateList = countryVATRateList;
      this.startVatRates();
    });
  }

  /**
   * Handle country changes
   * @param countryId Selected country
   */
  countryChanged(countryId: any): void {
    this.currentCountryVATRateList = this.countryVATRateList.filter(i => i.countryId === countryId);
    this.currentCountryVATRateList = this.utilsService.objArrSort(this.currentCountryVATRateList, 'countryVATRateValue');
    this.currentVATRate = this.currentCountryVATRateList[0].countryVATRateValue ? this.currentCountryVATRateList[0].countryVATRateValue : 0;
  }

  /**
   * Handle VAT rate changes
   * @param vatValue Selected vat rate
   */
  countryVATRateChanged(vatValue: number): void {
    this.currentVATRate = vatValue;
  }

  //#endregion
  
  //#region Data operations

  /**
   * Get countries service action (setTimeout to trick ExpressionChangedAfterItHasBeenCheckedError in the spinner)
   */
  private GetCountryList(): void {
    setTimeout(() => { this.calculatorService.getCountryList(); }, );
  }

  /**
   * Get country vat rates service action (setTimeout to trick ExpressionChangedAfterItHasBeenCheckedError in the spinner)
   */
  private GetCountryVATRateList(): void {
    setTimeout(() => { this.calculatorService.getCountryVATRateList(); }, );
  }

  //#endregion

  //#region Methods

  /**
   * Initialize vat rates selection
   */
  private startVatRates(): void {
    if (this.countryList.length > 0 && this.countryVATRateList.length > 0) {
      this.countryChanged(this.countryList[0].countryId);
    }
  }

  //#endregion

}
