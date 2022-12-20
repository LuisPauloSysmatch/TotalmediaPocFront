import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html'
})
export class VatCalculatorComponent implements OnInit, OnChanges {

  //#region Properties

  @Input() currentVATRate: number;
  selectedTextBox: string;
  netValue: number;
  vatValue: number;
  grossValue: number;

  //#endregion

  //#region Ng Core

  constructor() { 
    this.currentVATRate = 0;
    this.selectedTextBox = '';
    this.netValue = 0;
    this.vatValue = 0;
    this.grossValue = 0;
  }

  ngOnInit(): void {
    this.selectedTextBox = 'net';
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'currentVATRate':
            this.cleanValues();
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
   * When selected textbox change clear all textboxes values
   */
  selectedTextboxChanged(): void {
    this.cleanValues();
  }

  /**
   * Handle net value input
   * @param event Imput
   */
  netImput(event: any): void {
    this.netValue = event.value;
    if (this.currentVATRate > 0) {
      this.vatValue = this.netValue * (this.currentVATRate / 100);
      this.grossValue = this.netValue + this.vatValue;
    }
  }

  /**
   * Handle vat value input
   * @param event Imput
   */
  vatImput(event: any): void {
    this.vatValue = event.value;
    if (this.currentVATRate > 0) {
      this.netValue = this.vatValue * (100 / this.currentVATRate);
      this.grossValue = this.netValue + this.vatValue;
    }
  }

  /**
   * Handle gross value input
   * @param event Imput
   */
  grossImput(event: any): void {
    this.grossValue = event.value;
    if (this.currentVATRate > 0) {
      this.netValue = (this.grossValue / (100 + this.currentVATRate)) * 100;
      this.vatValue = this.grossValue - this.netValue;
    }
  }

  //#endregion

  //#region Methods

  /**
   * Set net, vat and gross values to zero
   */
  private cleanValues(): void {
    this.netValue = 0;
    this.vatValue = 0;
    this.grossValue = 0;
  }

  //#endregion

}
