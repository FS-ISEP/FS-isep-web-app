import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.css']
})
export class SponsorsPageComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Patrocinadores - Formula Student ISEP")
  }

}
