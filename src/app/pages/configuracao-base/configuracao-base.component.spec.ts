import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoBaseComponent } from './configuracao-base.component';

describe('ConfiguracaoBaseComponent', () => {
  let component: ConfiguracaoBaseComponent;
  let fixture: ComponentFixture<ConfiguracaoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
