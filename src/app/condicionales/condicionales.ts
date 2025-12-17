import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-condicionales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condicionales.html',
  styleUrl: './condicionales.css',
})
export class CondicionalesComponent {
  mostrar = true;

  toggle(): void {
    this.mostrar = !this.mostrar;
  }
}