import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangFlagComponent } from './lang-flag.component';

describe('LangFlagComponent', () => {
  let component: LangFlagComponent;
  let fixture: ComponentFixture<LangFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangFlagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LangFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
