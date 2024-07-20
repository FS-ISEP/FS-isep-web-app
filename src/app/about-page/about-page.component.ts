import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DEPARTMENTS } from '../services/departments/departments.service';
import { DYNAMIC_EVENTS, STATIC_EVENTS } from '../services/events/events.service';

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
  readonly IntroText = IntroTextEnum
  readonly departments = DEPARTMENTS;
  readonly staticEvents = STATIC_EVENTS;
  readonly dynamicEvents = DYNAMIC_EVENTS;

  selectedButton: IntroTextEnum = IntroTextEnum.HISTORIA;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Sobre - Formula Student ISEP")
  }

  selectButton(selected: IntroTextEnum) {
    this.selectedButton = selected;
  }
}
