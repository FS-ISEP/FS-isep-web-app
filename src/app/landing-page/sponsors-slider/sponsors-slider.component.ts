import { Component } from '@angular/core';
import { SPONSORS } from 'src/app/services/sponsors/sponsors.service';

@Component({
  selector: 'app-sponsors-slider',
  templateUrl: './sponsors-slider.component.html',
  styleUrls: ['./sponsors-slider.component.css'],
})
export class SponsorsSliderComponent {
  readonly sponsorList = SPONSORS;
}
