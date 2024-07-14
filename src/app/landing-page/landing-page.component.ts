import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  textContent = "Bem-vindo ao mundo da inovação sobre rodas com a equipa do Formula Student ISEP! Somos um grupo dedicado de estudantes apaixonados pela engenharia e pelo automobilismo, unidos sob a bandeira da excelência e da busca incessante pela perfeição. No âmago da nossa missão está o desafio global do Formula Student, onde competimos com universidades de todo o mundo para projetar, construir e correr carros de alta performance. No centro de cada decisão, cada soldadura e cada linha de código está o nosso compromisso com a inovação, a aprendizagem prática e o trabalho em equipa."

  constructor(private titleService: Title) {
    this.titleService.setTitle("Formula Student ISEP")
  }
}
