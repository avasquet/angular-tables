import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit{

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];

  columns: string[] = ['name', 'occupation', 'age'];
  dataset: Array<any> = [
    {"name": "John Smith", "occupation": "Advisor", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
  ]; 

  ngOnInit() {
    // set table columns
    this.displayedColumns = this.displayedColumns.concat(this.columns);
    
    // Set datasource
    this.dataSource = new MatTableDataSource<any>(this.dataset);
 } 
}
