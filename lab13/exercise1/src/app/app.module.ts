import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RootComponent } from "./root/root.component";
import { ErrorComponent } from "./error/error.component";
import { NotFoundComponent } from "./error/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
