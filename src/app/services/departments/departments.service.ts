import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/department.model';

export var DEPARTMENTS: Department[] = [
  {
    name: 'Líderes',
    members: [
      { name: 'Luís Pinheiro', function: 'Líder de Equipa', imageUrl: './assets/car_images/front.png' },
      { name: 'Diogo Castro', function: 'Vice-líder de Equipa', imageUrl: './assets/car_images/front.png' },
    ]
  },
  {
    name: 'Powertrain',
    members: [
      { name: 'João Sousa', function: 'Sub-Líder', imageUrl: './assets/car_images/front.png' },
      { name: 'João Mendes', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Tomás Silva', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Beatriz Teixeira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Diogo Silva', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Francisca Guimarães', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Diogo Cerqueira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Pedro Martins', function: 'Colega', imageUrl: './assets/car_images/front.png' },
    ]
  },
  {
    name: 'Eletrónica',
    members: [
      { name: 'Guilherme Castro', function: 'Sub-Líder', imageUrl: './assets/car_images/front.png' },
      { name: 'Diogo Faria', function: 'Sub-Líder', imageUrl: './assets/car_images/front.png' },
      { name: 'João Martins', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Diogo Teixeira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Pedro Moreira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'André Filipe', function: 'Colega', imageUrl: './assets/car_images/front.png' },
    ]
  },
  {
    name: 'Chassis, Suspenção e Aerodinâmica',
    members: [
      { name: 'Afonso Jesus', function: 'Sub-Líder', imageUrl: './assets/car_images/front.png' },
      { name: 'Nuno Terra', function: 'Sub-Líder', imageUrl: './assets/car_images/front.png' },
      { name: 'Vasco Amorim', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Jorge Castro', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Zé Augusto', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'António Sá', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Gonçalo Pinto', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Francisco Moreira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'João França', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'David Pinto', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Carlos', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'David Moreira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
    ]
  },
  {
    name: 'Gestão de Operações',
    members: [
      { name: 'João Magalhães', function: 'Sub-Líder', imageUrl: './assets/car_images/front.png' },
      { name: 'Afonso Correia', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Nuno Pinho', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Tomás Barros', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Simão Queiroga', function: 'Colega', imageUrl: './assets/car_images/front.png' },
      { name: 'Guilherme Silveira', function: 'Colega', imageUrl: './assets/car_images/front.png' },
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor() { }
}
