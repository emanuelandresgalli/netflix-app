import { Component, Input } from '@angular/core';
import { Esquema } from 'src/app/interfaces/esquema';
// import { Esquema, EsquemaTop } from 'src/app/interfaces/esquema';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input()
  public peliculas!: Esquema
  // public peliculass!: EsquemaTop;
}
