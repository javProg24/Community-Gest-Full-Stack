import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFormComponent } from './reporte-form.component';

describe('ReporteFormComponent', () => {
  let component: ReporteFormComponent;
  let fixture: ComponentFixture<ReporteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
