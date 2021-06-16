import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoSugestaoDetalhesComponent } from './reclamacao-sugestao-detalhes.component';

describe('ReclamacaoSugestaoDetalhesComponent', () => {
  let component: ReclamacaoSugestaoDetalhesComponent;
  let fixture: ComponentFixture<ReclamacaoSugestaoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamacaoSugestaoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoSugestaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
