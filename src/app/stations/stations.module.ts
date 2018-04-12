import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { StationsComponent } from './stations.component';
import { StationDetailComponent } from './station-detail/station-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StationsComponent,
    StationDetailComponent
  ],
  exports: [
    StationsComponent
  ]
})
export class StationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StationsModule
    }
  }
}