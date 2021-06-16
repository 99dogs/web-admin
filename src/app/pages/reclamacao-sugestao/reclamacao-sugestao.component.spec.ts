import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoSugestaoComponent } from './reclamacao-sugestao.component';

describe('ReclamacaoSugestaoComponent', () => {
  let component: ReclamacaoSugestaoComponent;
  let fixture: ComponentFixture<ReclamacaoSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamacaoSugestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
