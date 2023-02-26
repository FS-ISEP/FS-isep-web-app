import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

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

    return true;
  }
}
