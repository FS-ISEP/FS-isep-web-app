import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  
  constructor(private titleService: Title) {
    this.titleService.setTitle("Equipa - Formula Student ISEP")
  }
  
}
