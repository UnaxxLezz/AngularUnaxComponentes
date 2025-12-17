import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListadoComponent } from './listado/listado';
import { MisclientesComponent } from './misclientes/misclientes';
import { CondicionalesComponent } from './condicionales/condicionales';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentesangular');
}