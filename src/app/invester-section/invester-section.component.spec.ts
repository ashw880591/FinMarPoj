import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesterSectionComponent } from './invester-section.component';

describe('InvesterSectionComponent', () => {
  let component: InvesterSectionComponent;
  let fixture: ComponentFixture<InvesterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvesterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvesterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
