import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-lang-flag-sidebar',
  templateUrl: './lang-flag-sidebar.component.html',
  styleUrls: ['./lang-flag-sidebar.component.css'],
})
export class LangFlagSidebarComponent {
  @Input() public isSidebarHidden = true;

  languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService;
  }

  public onLanguageChange() {
    if (this.languageService.lang == 'pt') {
      this.languageService.setLanguageValue('en');
    } else if (this.languageService.lang == 'en') {
      this.languageService.setLanguageValue('pt');
    } else {
      console.log('Invalid Language');
    }
  }
}
