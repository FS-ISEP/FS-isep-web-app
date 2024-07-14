import { Injectable } from '@angular/core';
import { Sponsor } from 'src/app/models/sponsor.model';

export var SPONSORS: Sponsor[] = [
  { name: 'Addvolt', logoUrl: './assets/sponsors_logos/Logo_Addvolt.png' },
  { name: 'Bender', logoUrl: './assets/sponsors_logos/Logo_Bender.png' },
  { name: 'Paróquia Machico', logoUrl: './assets/sponsors_logos/Logo_Paróquia_Machico.png' },
  { name: 'Caetano Sport', logoUrl: './assets/sponsors_logos/Logo_Caetano Sport.png' },
  { name: 'Isabellenhütte', logoUrl: './assets/sponsors_logos/Logo_Isabellenhütte.png' },
  { name: 'Headsmotorsport', logoUrl: './assets/sponsors_logos/Logo_headsmotorsport.png' },
  { name: 'MathWorks', logoUrl: './assets/sponsors_logos/Logo_MathWorks.png' },
  { name: 'Altium', logoUrl: './assets/sponsors_logos/Logo_Altium.png' },
  { name: 'DEE', logoUrl: './assets/sponsors_logos/Logo_DEE.png' },
  { name: 'DEM', logoUrl: './assets/sponsors_logos/Logo_DEM.png' }
]

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor() { }
}
