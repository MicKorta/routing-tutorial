/**
 * The routing tutorial program implements a sample application that illustrates different
 * possibilities for navigation within an Angular application.
 *
 * @author  micha@codaa.de
 * @web     www.codaa.de
 * @version 1.0
 * @since   2020-11-28
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataSourceComponent } from './data/data-source/data-source.component';
import { DataDestinationComponent } from './data/data-destination/data-destination.component';
import { Data } from './object/models/data.model';
import { ObjectSourceComponent } from './object/object-source/object-source.component';
import { ObjectDestinationComponent } from './object/object-destination/object-destination.component';
import { ExternalLinkComponent } from './external-link/external-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataSourceComponent,
    DataDestinationComponent,
    ObjectSourceComponent,
    ObjectDestinationComponent,
    ExternalLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
