import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonsSidebarComponent } from './nav-buttons-sidebar.component';

describe('NavButtonsSidebarComponent', () => {
  let component: NavButtonsSidebarComponent;
  let fixture: ComponentFixture<NavButtonsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavButtonsSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavButtonsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
