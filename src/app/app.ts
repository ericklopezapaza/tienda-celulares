import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Producto{
  nombre: string;
  precio: number;
  disponible: boolean;
}


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //protected readonly title = signal('tecnologias-internet');
  nombretienda: string = 'VivoCell';
  encargado: string = 'Erick Lopez Apaza';
  numerosucursales: number = 1;
  tiendaabierta: boolean = true;

  categorias : string[] = [
    'Celulares',
    'Accesorios',
    'Audifonos'
  ]

  producto : Producto = {
    nombre: 'Samsung Galaxy S23 Ultra',
    precio: 2300,
    disponible: true
  }
   
}
