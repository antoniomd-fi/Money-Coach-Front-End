import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/header/button/button.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
