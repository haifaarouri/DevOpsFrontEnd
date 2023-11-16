import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorFormEditComponent } from './instructor-form-edit.component';

describe('InstructorFormEditComponent', () => {
  let component: InstructorFormEditComponent;
  let fixture: ComponentFixture<InstructorFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
