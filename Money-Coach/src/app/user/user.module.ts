import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { EntriesComponent } from './components/user-panel/entries/entries.component';
import { ExitsComponent } from './components/user-panel/exits/exits.component';
import { BalanceComponent } from './components/user-panel/balance/balance.component';



@NgModule({
  declarations: [
    UserPanelComponent,
    EntriesComponent,
    ExitsComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserPanelComponent
  ]
})
export class UserModule { }
