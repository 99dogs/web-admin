import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogwalkerComponent } from './dogwalker.component';

describe('DogwalkerComponent', () => {
  let component: DogwalkerComponent;
  let fixture: ComponentFixture<DogwalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogwalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogwalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
