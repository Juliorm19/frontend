import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAsComponent } from './registro-as.component';

describe('RegistroAsComponent', () => {
  let component: RegistroAsComponent;
  let fixture: ComponentFixture<RegistroAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
