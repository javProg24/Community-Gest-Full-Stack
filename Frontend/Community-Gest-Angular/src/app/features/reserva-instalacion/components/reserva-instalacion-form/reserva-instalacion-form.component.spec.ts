import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaInstalacionFormComponent } from './reserva-instalacion-form.component';

describe('ReservaInstalacionFormComponent', () => {
  let component: ReservaInstalacionFormComponent;
  let fixture: ComponentFixture<ReservaInstalacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaInstalacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaInstalacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
