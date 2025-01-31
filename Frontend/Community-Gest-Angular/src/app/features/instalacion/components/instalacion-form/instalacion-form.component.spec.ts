import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionFormComponent } from './instalacion-form.component';

describe('InstalacionFormComponent', () => {
  let component: InstalacionFormComponent;
  let fixture: ComponentFixture<InstalacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
