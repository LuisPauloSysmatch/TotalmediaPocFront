import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiConfig } from 'src/app/models/api-config.model';
import { TotalmediaPocContextService } from 'src/app/services/totalmedia-poc-context.service';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  //#region Ng Core

  constructor(
    private http: HttpClient,
    private totalmediaPocContextService: TotalmediaPocContextService
  ) { }

  //#endregion

  //#region Public methods

  /**
   * Load api url from json file dynamically in a context variable
   */
  loadApiConfig(): void {
    this.http.get<ApiConfig>('../../../assets/config/api-config.json').toPromise().then(config => {
      this.totalmediaPocContextService.setCurrentApiConfigs(config);
    });
  }

  //#endregion

}
