import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaInstalacionComponent } from './reserva-instalacion.component';

describe('ReservaInstalacionComponent', () => {
  let component: ReservaInstalacionComponent;
  let fixture: ComponentFixture<ReservaInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaInstalacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
