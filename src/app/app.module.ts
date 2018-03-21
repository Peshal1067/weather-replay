import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MapComponent } from './map/map.component';
import { MapStationComponent } from './map-station/map-station.component';
import { StationsComponent } from './stations/stations.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapStationComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
