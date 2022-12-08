import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonIconComponent, IonModule } from '@brisanet/ion';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
