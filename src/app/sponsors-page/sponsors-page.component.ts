import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.css']
})
export class SponsorsPageComponent {

  private readonly PT_MESSAGE = "Sem patrocinadores para a época corrente"
  private readonly EN_MESSAGE = "No sponsors for the current season"

  displayMessage: string = this.PT_MESSAGE

  constructor(private titleService: Title, private languageService: LanguageService) {
    this.titleService.setTitle("Patrocinadores - Formula Student ISEP")
  }

  ngOnInit() {
    this.displayMessage = this.languageService.lang == "pt" ? this.PT_MESSAGE : this.EN_MESSAGE
  }

}
