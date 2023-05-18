import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NestedCollapsibleTableComponent } from './nested-collapsible-table/nested-collapsible-table.component';
import { TableWithButtonsComponent } from './table-with-buttons/table-with-buttons.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './shared/table/table.component';
import { NestedTableComponent } from './nested-table/nested-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    NestedCollapsibleTableComponent,
    TableWithButtonsComponent,
    TableComponent,
    NestedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
