import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './pages/users/users.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

export interface CamposTabla {
  usuario: string;
  nombres: string;
  apellidos: string;
  departamento: string;
  cargo: string;
  email: string;
  acciones: string;
}

const ELEMENT_DATA: CamposTabla[] = [
  {usuario: 'coBearCoding', nombres: 'Roberth', apellidos: 'Ochoa', departamento: 'Sistemas', cargo: 'Developer', email: 'cobearcoding@gmail.com', acciones: 'Eliminar'},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    NgFor,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class TableBasicExample {
  displayedColumns: string[] = ['Usuario', 'Nombres', 'Apellidos', 'Departamento', 'Cargo', 'Email', 'Acciones'];
  dataSource = new MatTableDataSource<CamposTabla>(ELEMENT_DATA);
}