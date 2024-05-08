import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHistoryPageComponent } from './a-history-page.component';

describe('AHistoryPageComponent', () => {
  let component: AHistoryPageComponent;
  let fixture: ComponentFixture<AHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AHistoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
