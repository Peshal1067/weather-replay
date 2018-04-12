import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';

import { MapComponent } from './map.component';
import { MapStationComponent } from './map-station/map-station.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    MapStationComponent
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MapModule
    }
  }
}