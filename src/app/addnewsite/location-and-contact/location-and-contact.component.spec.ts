import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAndContactComponent } from './location-and-contact.component';

describe('LocationAndContactComponent', () => {
  let component: LocationAndContactComponent;
  let fixture: ComponentFixture<LocationAndContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAndContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAndContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
