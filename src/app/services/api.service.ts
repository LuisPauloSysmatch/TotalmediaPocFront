import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { RestVerbs } from '../enums/rest-verbs.enum';
import { ApiRequest } from '../models/api-request.model';
import { ApiResponse } from '../models/api-response.model';
import { TotalmediaPocContextService } from './totalmedia-poc-context.service';
import { MsgService } from './msg.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  //#region Ng Core

  constructor(
    private http: HttpClient,
    private totalmediaPocContextService: TotalmediaPocContextService,
    private spinnerService: SpinnerService,
    private msgService: MsgService
  ) {}

  //#endregion

  //#region Call

  /**
   * Call api controller
   * @param request Api request obj
   * @returns Api response
   */
  callApi(request: ApiRequest): Observable<ApiResponse> {
    const result = new Subject<ApiResponse>();
    result.next(new ApiResponse());

    // build header
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
      })
    };
    
    // build url
    const url = this.totalmediaPocContextService.currentApiConfigs?.apiUrl  + (request?.apiController !== undefined ? request?.apiController : '');

    // send request
    switch (request.restVerb) {
      case RestVerbs.GET:
        return this.http.get(url, httpOptions);
      case RestVerbs.POST:
        return this.http.post(url, request.body, httpOptions);
      case RestVerbs.PUT:
        return this.http.put(url, request.body, httpOptions);
      default:
        break;
    }

    return result.asObservable();
  }

  //#endregion

  //#region Api responses

  /**
   * Handle success reponse from api (check for error messages send by api)
   * @param response Api response
   * @param msgTitle Message title for success message
   * @param showSuccessMsg If true show a success msg (default is true)
   * @returns True if api dont send any error message
   */
  handleRequestSuccess(response: ApiResponse, msgTitle: string, showSuccessMsg: boolean = true): boolean {
    this.spinnerService.hideSpinner();
    if (!response.hasError) {
      // response without error
      if (showSuccessMsg) {
        this.msgService.successMsg(msgTitle, 'The operation was finish successfully');
      }
      // return success
      return true;
    } else {
      // response with error message from api
      this.msgService.errorMsg(msgTitle, (response.errorMessage ? response.errorMessage : ''));
    }
    return false;
  }

  /**
   * Handle unexpected response of an api request
   * @param error Unexpected error from request
   * @param msgTitle Message title for the unexpected error
   */
  handleRequestError(error: any, msgTitle: string): void {
    this.spinnerService.hideSpinner();
    if (error?.error?.hasError && error?.error?.errorMessage) {
      this.msgService.errorMsg(msgTitle, error?.error?.errorMessage);
    } else  {
      this.msgService.errorMsg(msgTitle, 'Operation did not complete successfully');
    }
    
    console.error(error);
  }

  //#endregion



}
