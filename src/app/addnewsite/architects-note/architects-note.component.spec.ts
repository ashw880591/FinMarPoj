import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsNoteComponent } from './architects-note.component';

describe('ArchitectsNoteComponent', () => {
  let component: ArchitectsNoteComponent;
  let fixture: ComponentFixture<ArchitectsNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectsNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
