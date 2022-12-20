import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ApiConfigService } from 'src/app/services/api-config.service';
import { TotalmediaPocContextService } from 'src/app/services/totalmedia-poc-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  //#region properties

  private componentDestroyed: Subject<boolean>;
  spinnerVisible: boolean;

  //#endregion

  //#region ng core

  constructor(
    private apiConfigService: ApiConfigService,
    private totalmediaPocContextService: TotalmediaPocContextService
  ) {
    this.componentDestroyed = new Subject<boolean>();
    this.spinnerVisible = false;    
  }

  ngOnInit() {
    // get api url dynamically
    this.apiConfigService.loadApiConfig();
    // app start spinner
    this.onSpinnerVisibleChange();
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.unsubscribe();
  }

  //#endregion

  //#region Events

  /**
   * Subcribe spinner visible changes, when change show/hide spinner
   */
  private onSpinnerVisibleChange(): void {
    this.totalmediaPocContextService.spinnerVisible.pipe(takeUntil(this.componentDestroyed)).subscribe(spinnerVisible => {
      this.spinnerVisible = spinnerVisible;
    });
  }

  //#endregion

}
