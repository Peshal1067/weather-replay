import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { StationsComponent } from './stations/stations.component';
import { AboutComponent } from './about/about.component';
// import { StationDetailComponent } from './map/station-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' }
  , { path: 'map', component: MapComponent }
  , { path: 'stations', component: StationsComponent }
  , { path: 'station', redirectTo: 'stations' }
  , { path: 'stations/:id', component: StationsComponent }
  , { path: 'station/:id', redirectTo: 'station/:id' }
  , { path: 'about', component: AboutComponent }
];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ]
      , exports: [ RouterModule ]
})
export class AppRoutingModule { }
