import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { ApiControllers } from 'src/app/enums/api-controllers.enum';
import { RestVerbs } from 'src/app/enums/rest-verbs.enum';
import { ApiRequest } from 'src/app/models/api-request.model';
import { ApiResponse } from 'src/app/models/api-response.model';
import { CountryVATRate } from 'src/app/models/country-vat-rate.model';
import { Country } from 'src/app/models/country.model';
import { ApiService } from 'src/app/services/api.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  //#region Properties

  countryList: BehaviorSubject<Country[]>;
  countryVATRateList: BehaviorSubject<CountryVATRate[]>;

  //#endregion

  //#region Ng Core

  constructor(
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {
    this.countryList = new BehaviorSubject<Country[]>([]);
    this.countryVATRateList = new BehaviorSubject<CountryVATRate[]>([]);
  }

  //#endregion

  //#region Api calls

  /**
   * Get country list from api
   */
  getCountryList(): void {
    // api request
    const request = new ApiRequest({
      apiController: ApiControllers.Countries,
      restVerb: RestVerbs.GET
    });
    // request
    this.spinnerService.showSpinner();
    this.apiService.callApi(request).pipe(take(1)).subscribe(
      (response: ApiResponse) => this.getCountryListSuccess(response),
      (error: any) => this.getCountryListError(error)
    );
  }

  /**
   * Get country vat rate list from api
   */
  getCountryVATRateList(): void {
    // api request
    const request = new ApiRequest({
      apiController: ApiControllers.CountryVATRates,
      restVerb: RestVerbs.GET
    });
    // request
    this.spinnerService.showSpinner();
    this.apiService.callApi(request).pipe(take(1)).subscribe(
      (response: ApiResponse) => this.getCountryVATRateListSuccess(response),
      (error: any) => this.getCountryVATRateListError(error)
    );
  }

  //#endregion

  //#region Api responses

  /**
   * Get country list success
   * @param response Api response
   */
  private getCountryListSuccess(response: ApiResponse): void {
    if (this.apiService.handleRequestSuccess(response, 'Countries', false)) {
      this.countryList.next(response.data as Country[]);
    }
  }

  /**
   * Get country list error
   * @param error Api error
   */
  private getCountryListError(error: any): void {
    this.apiService.handleRequestError(error, 'Countries');
  }
  
  /**
   * Get country VAT rate list success
   * @param response Api response
   */
  private getCountryVATRateListSuccess(response: ApiResponse): void {
    if (this.apiService.handleRequestSuccess(response, 'Country VAT Rates', false)) {
      this.countryVATRateList.next(response.data as Country[]);
    }
  }

  /**
   * Get country VAT rate list error
   * @param error Api error
   */
  private getCountryVATRateListError(error: any): void {
    this.apiService.handleRequestError(error, 'Country VAT Rates');
  }

  //#endregion

}
