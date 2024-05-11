import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFsPageComponent } from './a-fs-page.component';

describe('AFsPageComponent', () => {
  let component: AFsPageComponent;
  let fixture: ComponentFixture<AFsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
