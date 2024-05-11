import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-lang-flag',
  templateUrl: './lang-flag.component.html',
  styleUrls: ['./lang-flag.component.css'],
})
export class LangFlagComponent {
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
