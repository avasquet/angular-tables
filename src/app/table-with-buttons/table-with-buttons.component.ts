import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-with-buttons',
  templateUrl: './table-with-buttons.component.html',
  styleUrls: ['./table-with-buttons.component.css']
})
export class TableWithButtonsComponent implements OnInit{
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  actionColumnName: string;

  leftButtonEmitter: EventEmitter<any> = new EventEmitter();
  rightButtonEmitter: EventEmitter<any> = new EventEmitter();

  columns: TableColumn[] = [
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'occupation', header: 'Occupation asdfadf' },
    { columnDef: 'age', header: 'Age' },
  ];
  
  dataset: Array<User> = [
    {"name": "John Smith", "occupation": "Advisor", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
  ];
  // actionColumn: TableActionColumn;
  actionColumn: TableActionColumn = {
    header: 'Acciones Disponibles',
    leftIcon: 'home',
    rightIcon: 'shopping_cart_checkout',
  }

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  ngOnInit() {
    // set table columns
    this.displayedColumns = this.columns.map(e => e.columnDef);

    // Add operation column
    if(this.actionColumn){
      this.displayedColumns = this.displayedColumns.concat('operation');
      console.log(this.displayedColumns);
      this.actionColumnName = this.actionColumn.header;
    }
    
    // Set datasource
    this.setTableDataSource(this.dataset);
  }

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
  }

  leftButtonAction(element: any){
    this.leftButtonEmitter.emit(element);  
    console.log(element);
  }

  rightButtonAction(element: any){
    this.rightButtonEmitter.emit(element);
  }

}

interface TableActionColumn{
  header: string,
  leftIcon: string,
  rightIcon: string,
}

interface TableColumn{
  columnDef: string,
  header: string,
}

interface User{
  name: string,
  occupation: string,
  age: number,
}