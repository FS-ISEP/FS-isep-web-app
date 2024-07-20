import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css'],
})
export class CarPageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Carro - Formula Student ISEP');
  }
}
