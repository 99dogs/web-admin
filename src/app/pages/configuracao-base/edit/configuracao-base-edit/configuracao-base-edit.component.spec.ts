import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoBaseEditComponent } from './configuracao-base-edit.component';

describe('ConfiguracaoBaseEditComponent', () => {
  let component: ConfiguracaoBaseEditComponent;
  let fixture: ComponentFixture<ConfiguracaoBaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoBaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoBaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
