import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHerramientaComponent } from './reserva-herramienta.component';

describe('ReservaHerramientaComponent', () => {
  let component: ReservaHerramientaComponent;
  let fixture: ComponentFixture<ReservaHerramientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaHerramientaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
