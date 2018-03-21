import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStationComponent } from './map-station.component';

describe('MapStationComponent', () => {
  let component: MapStationComponent;
  let fixture: ComponentFixture<MapStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
