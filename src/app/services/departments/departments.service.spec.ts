import { TestBed } from '@angular/core/testing';

import { TeamMembersService } from './departments.service';

describe('TeamMembersService', () => {
  let service: TeamMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
