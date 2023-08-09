import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFloraComponent } from './add-flora.component';

describe('AddFloraComponent', () => {
  let component: AddFloraComponent;
  let fixture: ComponentFixture<AddFloraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFloraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
