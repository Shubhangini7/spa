import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

import { SearchService } from './search.service';
import { SearchFieldComponent } from './search-field/search-field.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
