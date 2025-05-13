import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativaComponent } from './operativa.component';

describe('OperativaComponent', () => {
  let component: OperativaComponent;
  let fixture: ComponentFixture<OperativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
