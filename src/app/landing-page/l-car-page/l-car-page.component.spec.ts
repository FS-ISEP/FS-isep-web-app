import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCarPageComponent } from './l-car-page.component';

describe('LCarPageComponent', () => {
  let component: LCarPageComponent;
  let fixture: ComponentFixture<LCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
