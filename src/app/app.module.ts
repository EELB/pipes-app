import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumanDevelpmentPeriodsPipe } from './pipes/human-develpment-periods.pipe';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HumanDevelpmentPeriodsPipe,
    CurrencyConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
