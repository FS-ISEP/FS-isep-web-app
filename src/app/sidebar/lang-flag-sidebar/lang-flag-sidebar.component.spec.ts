import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangFlagSidebarComponent } from './lang-flag-sidebar.component';

describe('LangFlagSidebarComponent', () => {
  let component: LangFlagSidebarComponent;
  let fixture: ComponentFixture<LangFlagSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangFlagSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LangFlagSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
