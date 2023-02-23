import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/header/button/button.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    NotFoundComponent,
    InternalErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
