import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  nombre: string = 'Batman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerData(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarHeroe(): void {
    this.nombre = (this.nombre == 'Batman') ? 'Spiderman' : 'Batman';
  }

  cambiarEdad(): void {
    this.edad = (this.edad == 45) ? 20 : 45;
  }
}
