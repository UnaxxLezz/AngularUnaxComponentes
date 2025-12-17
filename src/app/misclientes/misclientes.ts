import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-misclientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './misclientes.html',
  styleUrl: './misclientes.css',
})
export class MisclientesComponent {
  clientes: Cliente[] = [
    new Cliente('Ana', 'Calle Mayor 12'),
    new Cliente('Luis', 'Av. del Sol 45'),
    new Cliente('Marta', 'Plaza Centro 3'),
  ];

  nombre = '';
  direccion = '';

  addCliente(): void {
    const n = this.nombre.trim();
    const d = this.direccion.trim();
    if (!n || !d) return;

    this.clientes.push(new Cliente(n, d));
    this.nombre = '';
    this.direccion = '';
  }

  deleteCliente(index: number): void {
    this.clientes.splice(index, 1);
  }
}