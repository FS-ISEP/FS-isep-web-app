import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

enum IntroTextEnum {
  HISTORIA,
  MISSAO
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent {
  IntroText = IntroTextEnum

  selectedButton: IntroTextEnum = IntroTextEnum.HISTORIA;
  selectedColor: string = 'white';
  unselectedColor: string = 'rgb(196, 196, 196)';

  constructor(private titleService: Title) {
    this.titleService.setTitle("Sobre - Formula Student ISEP")
  }

  selectButton(selected: IntroTextEnum) {
    this.selectedButton = selected;
  }
}
