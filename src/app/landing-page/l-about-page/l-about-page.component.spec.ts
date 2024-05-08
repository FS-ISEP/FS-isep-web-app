import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAboutPageComponent } from './l-about-page.component';

describe('LAboutPageComponent', () => {
  let component: LAboutPageComponent;
  let fixture: ComponentFixture<LAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAboutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
