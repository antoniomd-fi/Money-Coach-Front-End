import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { EntriesComponent } from './components/user-panel/entries/entries.component';
import { ExitsComponent } from './components/user-panel/exits/exits.component';
import { BalanceComponent } from './components/user-panel/balance/balance.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserPanelComponent,
    EntriesComponent,
    ExitsComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    UserPanelComponent
  ]
})
export class UserModule { }
