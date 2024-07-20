import { TeamMember } from './team-member.model';

export interface Department {
  name: string;
  members: TeamMember[];
}
