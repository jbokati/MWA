import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart.component';
import { BumbComponent } from './bumb.component';
import { IsVisibleDirective } from './is-visible.directive';
import { LoggableDirective } from './loggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    BumbComponent,
    IsVisibleDirective,
    LoggableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
