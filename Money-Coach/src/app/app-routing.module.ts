import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/components/banner/banner.component';
import { UsersInfoComponent } from './admin/components/users-info/users-info.component';

const routes: Routes = [
  {path: '', component:BannerComponent},
  {path: 'admin', component:UsersInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
