import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
  title: string = 'Titulo de la App';
  numero: number = 0;
  base: number = 5;
  accion: string | null = null;

  cambiarValor( valor: number, accion: string) {
    if (accion === 'sumar') {
      this.numero += valor
    }

    if (accion === 'restar') {
      this.numero -= valor
    }
  }
}
