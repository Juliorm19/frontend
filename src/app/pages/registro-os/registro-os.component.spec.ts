import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOsComponent } from './registro-os.component';

describe('RegistroOsComponent', () => {
  let component: RegistroOsComponent;
  let fixture: ComponentFixture<RegistroOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
