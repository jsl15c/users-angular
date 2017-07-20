import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AuthServiceService} from './services/auth-service.service';
import {CamelServiceService} from './services/camel-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CamelListComponent } from './camel-list/camel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CamelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    CamelServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
