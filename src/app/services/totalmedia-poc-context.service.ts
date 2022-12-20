import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiConfig } from 'src/app/models/api-config.model';

@Injectable({
  providedIn: 'root'
})
export class TotalmediaPocContextService {

  //#region Properties

  /**
   * Current configuration for api url
   */
  currentApiConfigs?: ApiConfig;

  /**
   * If true show spinner, if false hide spinner
   */
  spinnerVisible: BehaviorSubject<boolean>;

  //#endregion

  //#region Core

  constructor() {
    this.spinnerVisible = new BehaviorSubject<boolean>(false);
  }

  //#endregion

  //#region Methods

  /**
   * Set current configuration for api url
   * @param config Configs from api-config.json
   */
  setCurrentApiConfigs(config?: ApiConfig): void {
    this.currentApiConfigs = config;
  }

  //#endregion

}
