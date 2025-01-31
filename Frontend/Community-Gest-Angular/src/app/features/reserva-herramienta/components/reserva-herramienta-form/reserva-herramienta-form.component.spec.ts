import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHerramientaFormComponent } from './reserva-herramienta-form.component';

describe('ReservaHerramientaFormComponent', () => {
  let component: ReservaHerramientaFormComponent;
  let fixture: ComponentFixture<ReservaHerramientaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaHerramientaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaHerramientaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
