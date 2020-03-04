import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NriSectionComponent } from './nri-section.component';

describe('NriSectionComponent', () => {
  let component: NriSectionComponent;
  let fixture: ComponentFixture<NriSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NriSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NriSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
