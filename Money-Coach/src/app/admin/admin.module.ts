import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { TableComponent } from './components/users-info/table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersInfoComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersInfoComponent
  ]
})
export class AdminModule { }
