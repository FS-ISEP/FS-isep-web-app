import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/event.model';

export const STATIC_EVENTS: Event[] = [
  {
    title: 'ENGINEERING DESIGN',
    description:
      'Os estudantes devem apresentar os seus conhecimentos sobre o carro e conceitos de engenharia a um painel de juízes. Na maioria dos eventos há múltiplas rondas de design, cada uma com perguntas cada vez mais difíceis e sessões mais longas. A primeira ronda envolve todas as equipas, e centra-se nos conhecimentos fundamentais. Apenas as melhores equipas chegam às finais.',
    imageUrl: './assets/car_images/front.png',
  },
  {
    title: 'ENGINEERING DESIGN',
    description:
      'Os estudantes devem apresentar os seus conhecimentos sobre o carro e conceitos de engenharia a um painel de juízes. Na maioria dos eventos há múltiplas rondas de design, cada uma com perguntas cada vez mais difíceis e sessões mais longas. A primeira ronda envolve todas as equipas, e centra-se nos conhecimentos fundamentais. Apenas as melhores equipas chegam às finais.',
    imageUrl: './assets/car_images/front.png',
  },
  {
    title: 'ENGINEERING DESIGN',
    description:
      'Os estudantes devem apresentar os seus conhecimentos sobre o carro e conceitos de engenharia a um painel de juízes. Na maioria dos eventos há múltiplas rondas de design, cada uma com perguntas cada vez mais difíceis e sessões mais longas. A primeira ronda envolve todas as equipas, e centra-se nos conhecimentos fundamentais. Apenas as melhores equipas chegam às finais.',
    imageUrl: './assets/car_images/front.png',
  },
];

export const DYNAMIC_EVENTS: Event[] = [
  {
    title: 'ENGINEERING DESIGN',
    description:
      'Os estudantes devem apresentar os seus conhecimentos sobre o carro e conceitos de engenharia a um painel de juízes. Na maioria dos eventos há múltiplas rondas de design, cada uma com perguntas cada vez mais difíceis e sessões mais longas. A primeira ronda envolve todas as equipas, e centra-se nos conhecimentos fundamentais. Apenas as melhores equipas chegam às finais.',
    imageUrl: './assets/car_images/front.png',
  },
  {
    title: 'ENGINEERING DESIGN',
    description:
      'Os estudantes devem apresentar os seus conhecimentos sobre o carro e conceitos de engenharia a um painel de juízes. Na maioria dos eventos há múltiplas rondas de design, cada uma com perguntas cada vez mais difíceis e sessões mais longas. A primeira ronda envolve todas as equipas, e centra-se nos conhecimentos fundamentais. Apenas as melhores equipas chegam às finais.',
    imageUrl: './assets/car_images/front.png',
  },
  {
    title: 'ENGINEERING DESIGN',
    description:
      'Os estudantes devem apresentar os seus conhecimentos sobre o carro e conceitos de engenharia a um painel de juízes. Na maioria dos eventos há múltiplas rondas de design, cada uma com perguntas cada vez mais difíceis e sessões mais longas. A primeira ronda envolve todas as equipas, e centra-se nos conhecimentos fundamentais. Apenas as melhores equipas chegam às finais.',
    imageUrl: './assets/car_images/front.png',
  },
];

@Injectable({
  providedIn: 'root',
})
export class EventsService {}
