import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSponsorsPageComponent } from './l-sponsors-page.component';

describe('LSponsorsPageComponent', () => {
  let component: LSponsorsPageComponent;
  let fixture: ComponentFixture<LSponsorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSponsorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSponsorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
