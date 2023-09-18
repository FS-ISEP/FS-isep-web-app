import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent {

  private readonly PT_MESSAGE = "Em breve..."
  private readonly EN_MESSAGE = "Soon..."

  displayMessage: string = this.PT_MESSAGE

  constructor(private titleService: Title, private languageService: LanguageService) {
    this.titleService.setTitle("Loja - Formula Student ISEP");

    languageService.languageChanged$.subscribe(lang => this.setDisplayMessage(lang));
  }

  ngOnInit() {
    this.setDisplayMessage(this.languageService.lang);
  }

  setDisplayMessage(lang: string){
    this.displayMessage = lang == "pt" ? this.PT_MESSAGE : this.EN_MESSAGE;
  }
  
}
