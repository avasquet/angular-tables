import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { NestedCollapsibleTableComponent } from './nested-collapsible-table/nested-collapsible-table.component';
import { TableWithButtonsComponent } from './table-with-buttons/table-with-buttons.component';
import { NestedTableComponent } from './nested-table/nested-table.component';

const routes: Routes = [
  {path:'', component:BasicTableComponent},
  {path:'buttonsTable', component:TableWithButtonsComponent},
  {path:'nestedCollapsible', component:NestedCollapsibleTableComponent},
  {path:'nestedTable', component:NestedTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
