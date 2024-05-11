import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATeamPageComponent } from './a-team-page.component';

describe('ATeamPageComponent', () => {
  let component: ATeamPageComponent;
  let fixture: ComponentFixture<ATeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATeamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
