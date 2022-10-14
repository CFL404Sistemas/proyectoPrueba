import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFotoComponent } from './seccion-foto.component';

describe('SeccionFotoComponent', () => {
  let component: SeccionFotoComponent;
  let fixture: ComponentFixture<SeccionFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
