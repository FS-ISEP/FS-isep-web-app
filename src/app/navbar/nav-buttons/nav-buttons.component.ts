import { Component, HostListener, Input } from '@angular/core';
import { NavBarButton } from 'src/app/navbar-button';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent {

  @Input() public navbarButtons: NavBarButton[] = [];

  mousePosX?: number
  directionX?: string
  hasTransitionEnded: boolean = false

  languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService
  }

  @HostListener('document:mousemove', ['$event'])
  public globalMouseMoveHandler(e: MouseEvent) {
    if (this.mousePosX) {
      this.directionX = e.pageX > this.mousePosX ? 'right' : 'left'
    }

    this.mousePosX = e.pageX
  }

  public mouseMoveHandler(e: MouseEvent) {
    if (!this.hasTransitionEnded) {
      return
    }

    var element = e.target as HTMLElement;

    if (element.classList.contains('fade-left') && this.directionX == "right") {
      element.classList.remove('fade-left');
      element.classList.add('fade-right');
    } else if (element.classList.contains('fade-right') && this.directionX == "left") {
      element.classList.remove('fade-right');
      element.classList.add('fade-left');
    }

  }

  public transitionEndHandler(e: TransitionEvent) {
    if (e.propertyName != "box-shadow") {
      return
    }

    var element = e.target as HTMLElement;

    if (element.classList.contains('fade-left') || element.classList.contains('fade-right')) {
      element.classList.remove('transition');
      this.hasTransitionEnded = true
    }
  }

  public mouseEnterHandler(e: MouseEvent) {
    var element = e.target as HTMLElement;

    this.directionX == "left" ? element.classList.add('fade-right') : element.classList.add('fade-left')
  }

  public mouseLeaveHandler(e: MouseEvent) {
    var element = e.target as HTMLElement;

    element.classList.add('transition');
    this.hasTransitionEnded = false

    if (element.classList.contains('fade-left')) {
      element.classList.remove('fade-left');
    }
    if (element.classList.contains('fade-right')) {
      element.classList.remove('fade-right');
    }
  }
}
