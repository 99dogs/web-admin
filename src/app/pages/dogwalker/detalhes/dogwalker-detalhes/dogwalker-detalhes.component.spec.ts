import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogwalkerDetalhesComponent } from './dogwalker-detalhes.component';

describe('DogwalkerDetalhesComponent', () => {
  let component: DogwalkerDetalhesComponent;
  let fixture: ComponentFixture<DogwalkerDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogwalkerDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogwalkerDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
