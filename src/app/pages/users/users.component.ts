import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  disableSelect: boolean = true; // Define the disableSelect property
  dataSource: any; // Reemplaza 'any' con el tipo de datos adecuado
  displayedColumns: string[] = ['Usuario', 'Nombres', 'Apellidos', 'Departamento, Cargo, Email, Acciones'];
}