import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqueoBriqComponent } from './arqueo-briq.component';

describe('ArqueoBriqComponent', () => {
  let component: ArqueoBriqComponent;
  let fixture: ComponentFixture<ArqueoBriqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArqueoBriqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArqueoBriqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
