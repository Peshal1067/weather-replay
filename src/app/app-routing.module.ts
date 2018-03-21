import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
// import { StationDetailComponent } from './map/station-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' }
  , { path: 'map', component: MapComponent }
  //, { path: 'station/:id', component: StationDetailComponent }
];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ]
      , exports: [ RouterModule ]
})
export class AppRoutingModule { }
