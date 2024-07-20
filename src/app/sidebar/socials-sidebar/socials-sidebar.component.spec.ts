import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsSidebarComponent } from './socials-sidebar.component';

describe('SocialsSidebarComponent', () => {
  let component: SocialsSidebarComponent;
  let fixture: ComponentFixture<SocialsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialsSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
