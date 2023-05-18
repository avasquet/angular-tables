import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../shared/models/TableColumn.model';
import { TableActionColumn } from '../shared/models/TableActionColumn.model';
import { User } from '../shared/models/User.model';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.css']
})
export class NestedTableComponent implements OnInit{

  users: User[];
  columns: TableColumn[];
  actionColumn: TableActionColumn;

  updateAppointment($element: User): void{
    console.info($element);
  }
  
  deleteAppointment($element: User): void{
    console.warn($element);
  }

  getUsers(): void{
    this.users = [
      {id: 1, nombre: "user1", edad: 20, correo: "user1@mail.com", fecha: new Date('2010-05-18'), hora: new Date(new Date().setHours(10,30))},
      {id: 2, nombre: "user2", edad: 22, correo: "user2@mail.com", fecha: new Date('2015-12-31'), hora: new Date(new Date().setHours(23,30))},
      {id: 3, nombre: "user3", edad: 25, correo: "user3@mail.com", fecha: new Date('2011-01-01'), hora: new Date(new Date().setHours(0,59))},
    ]
  }

  ngOnInit(): void {
    this.getUsers();

    this.columns = [
      {columnDef: 'id', header:'Id Afiliado', type: 'number'},
      {columnDef: 'edad', header:'Edad', type: 'number'},
      {columnDef: 'correo', header:'E-Mail', type: 'string'},
      {columnDef: 'fecha', header:'Fecha', type: 'date', dateFormat:'dd/MM/yyyy'},
      {columnDef: 'hora', header:'Hora', type: 'time', timeFormat:'HH:mm'},
    ]

    this.actionColumn = {header:'Operaciones', leftIcon: 'home', rightIcon:'sync'};
  }
}
