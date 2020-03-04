import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewsiteComponent } from './addnewsite.component';

describe('AddnewsiteComponent', () => {
  let component: AddnewsiteComponent;
  let fixture: ComponentFixture<AddnewsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
