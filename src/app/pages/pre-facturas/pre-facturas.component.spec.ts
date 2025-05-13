import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFacturasComponent } from './pre-facturas.component';

describe('PreFacturasComponent', () => {
  let component: PreFacturasComponent;
  let fixture: ComponentFixture<PreFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreFacturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
