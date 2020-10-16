import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglapaComponent } from './reglapa.component';

describe('ReglapaComponent', () => {
  let component: ReglapaComponent;
  let fixture: ComponentFixture<ReglapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
