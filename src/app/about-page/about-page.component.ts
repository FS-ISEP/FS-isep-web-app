import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DEPARTMENTS } from '../services/departments/departments.service';
import {
  DYNAMIC_EVENTS,
  STATIC_EVENTS,
} from '../services/events/events.service';

enum IntroTextEnum {
  HISTORIA,
  MISSAO,
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent {
  readonly IntroText = IntroTextEnum;
  readonly departments = DEPARTMENTS;
  readonly staticEvents = STATIC_EVENTS;
  readonly dynamicEvents = DYNAMIC_EVENTS;

  readonly historyText =
    'A Equipa de Formula Student do Instituto Superior de Engenharia do Porto (ISEP) teve o seu início em 2020, impulsionada pela paixão pela engenharia automóvel e pelo desejo de representar o ISEP em competições de renome internacional. Embora ainda não tenha participado em competições, a equipa já demonstrou um notável compromisso com a excelência e a inovação, garantindo o seu lugar entre os participantes qualificados. Desde a sua fundação, a equipa tem trabalhado incansavelmente no projeto e construção de um carro de corrida de alta performance, combinando conhecimentos teóricos com habilidades práticas. Esta abordagem multidisciplinar tem permitido aos membros da equipa adquirir uma valiosa experiência, enfrentando desafios técnicos e colaborando em projetos complexos.';
  readonly missionText =
    'A missão primordial da Equipa de Formula Student do Instituto Superior de Engenharia do Porto (ISEP) é fomentar a excelência e a inovação no campo da engenharia através da sua participação em competições de Formula Student. Ao envolver os estudantes em projetos práticos e desafiantes, a equipa procura desenvolver as suas competências técnicas, criativas e de liderança, preparando-os para os desafios do mundo real da engenharia automóvel. Além disso, a equipa aspira a representar não apenas o ISEP, mas também Portugal, nos eventos nacionais e internacionais, demonstrando o talento e a dedicação dos estudantes de engenharia do país. Através da sua participação em competições, a equipa pretende inspirar e motivar outros estudantes a perseguirem a excelência académica e a explorarem o vasto potencial da engenharia, contribuindo assim para o crescimento e prestígio do setor em Portugal.';
  readonly goalText =
    'A Equipa de Formula Student do Instituto Superior de Engenharia do Porto (ISEP) teve o seu início em 2020, impulsionada pela paixão pela engenharia automóvel e pelo desejo de representar o ISEP em competições de renome internacional. Embora ainda não tenha participado em competições, a equipa já demonstrou um notável compromisso com a excelência e a inovação, garantindo o seu lugar entre os participantes qualificados. Desde a sua fundação, a equipa tem trabalhado incansavelmente no projeto e construção de um carro de corrida de alta performance, combinando conhecimentos teóricos com habilidades práticas. Esta abordagem multidisciplinar tem permitido aos membros da equipa adquirir uma valiosa experiência, enfrentando desafios técnicos e colaborando em projetos complexos.';
  readonly eventsText =
    'A Equipa de Formula Student do Instituto Superior de Engenharia do Porto (ISEP) teve o seu início em 2020, impulsionada pela paixão pela engenharia automóvel e pelo desejo de representar o ISEP em competições de renome internacional. Embora ainda não tenha participado em competições, a equipa já demonstrou um notável compromisso com a excelência e a inovação, garantindo o seu lugar entre os participantes qualificados. Desde a sua fundação, a equipa tem trabalhado incansavelmente no projeto e construção de um carro de corrida de alta performance, combinando conhecimentos teóricos com habilidades práticas. Esta abordagem multidisciplinar tem permitido aos membros da equipa adquirir uma valiosa experiência, enfrentando desafios técnicos e colaborando em projetos complexos.';

  selectedButton: IntroTextEnum = IntroTextEnum.HISTORIA;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Sobre - Formula Student ISEP');
  }

  selectButton(selected: IntroTextEnum) {
    this.selectedButton = selected;
  }
}
