import { Injectable } from '@angular/core';

import { TotalmediaPocContextService } from 'src/app/services/totalmedia-poc-context.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  //#region Properties

  private activeSpinners = 0;

  //#endregion

  //#region Ng Core

  constructor(private totalmediaPocContextService: TotalmediaPocContextService) {}

  //#endregion

  //#region Actions

  /**
   * Show spinner
   */
  showSpinner(): void {
    if (this.activeSpinners === 0) {
      this.totalmediaPocContextService.spinnerVisible.next(true);
    }
    this.activeSpinners++;
  }

  /**
   * Hide spinner
   */
  hideSpinner(): void {
    this.activeSpinners--;
    if (this.activeSpinners < 0) {
      this.activeSpinners = 0;
    }
    if (this.activeSpinners === 0) {
      this.totalmediaPocContextService.spinnerVisible.next(false);
    }
  }

  //#endregion

}
