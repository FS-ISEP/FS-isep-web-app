import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // Observable string source
  private languageChangedSource = new Subject<string>();

  // Observable string stream
  languageChanged$ = this.languageChangedSource.asObservable();

  lang = "pt";

  constructor(){
    this.lang = this.getLanguageValue();
  }

  private getLanguageValue() {
    var lang = localStorage.getItem("lang");

    if (lang == null) {
      this.setLanguageValue("pt");
      return "pt";
    }

    return lang
  }

  public setLanguageValue(lang: string) {
    if (lang != "pt" && lang != "en") {
      return false
    }

    this.lang = lang;
    localStorage.setItem("lang", lang);
    this.languageChangedSource.next(lang);

    return true;
  }
}
