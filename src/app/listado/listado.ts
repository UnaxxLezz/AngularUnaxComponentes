import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class ListadoComponent {
  items: string[] = [];
  nuevoItem = '';

  constructor() {
    this.items = ['Pan', 'Leche', 'Huevos'];
  }

  addItem(): void {
    const valor = this.nuevoItem.trim();
    if (!valor) return;

    this.items.push(valor);
    this.nuevoItem = ''; 
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}