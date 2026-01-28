import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Prostokat } from './prostokat/prostokat';
import { Trojkat } from './trojkat/trojkat';
import { Romb } from './romb/romb';
import { Trapez } from './trapez/trapez';
import { Start } from './start/start';

@NgModule({
  declarations: [
    App,
    Prostokat,
    Trojkat,
    Romb,
    Trapez,
    Start
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
