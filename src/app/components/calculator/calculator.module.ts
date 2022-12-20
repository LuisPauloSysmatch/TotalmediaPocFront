import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { CalculatorHelpComponent } from '../calculator-help/calculator-help.component';
import { CountrySelectionComponent } from '../country-selection/country-selection.component';
import { VatRateSelectionComponent } from '../vat-rate-selection/vat-rate-selection.component';
import { VatCalculatorComponent } from '../vat-calculator/vat-calculator.component'

@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorHelpComponent,
    CountrySelectionComponent,
    VatRateSelectionComponent,
    VatCalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    AccordionModule,
    PanelModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalculatorModule { }
