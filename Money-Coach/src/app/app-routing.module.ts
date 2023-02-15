import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/components/banner/banner.component';
import { UsersInfoComponent } from './admin/components/users-info/users-info.component';
import { UserPanelComponent } from './user/components/user-panel/user-panel.component';
import { LoginViewComponent } from './login/login-view/login-view.component';


const routes: Routes = [
  {path: '', component:BannerComponent},
  {path: 'admin', component:UsersInfoComponent},
  {path: 'user/:id', component:UserPanelComponent},
  {path: 'login', component:LoginViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
