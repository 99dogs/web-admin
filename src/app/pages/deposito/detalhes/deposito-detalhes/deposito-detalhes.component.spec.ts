import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoDetalhesComponent } from './deposito-detalhes.component';

describe('DepositoDetalhesComponent', () => {
  let component: DepositoDetalhesComponent;
  let fixture: ComponentFixture<DepositoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
