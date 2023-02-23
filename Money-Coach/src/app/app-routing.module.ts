import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/components/banner/banner.component';
import { UsersInfoComponent } from './admin/components/users-info/users-info.component';
import { UserPanelComponent } from './user/components/user-panel/user-panel.component';
import { LoginViewComponent } from './login/login-view/login-view.component';
import { NotFoundComponent} from './shared/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { InternalErrorComponent } from './shared/internal-error/internal-error.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';



const routes: Routes = [
  {path: '', component:BannerComponent},
  {path: 'admin', component:UsersInfoComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component:UserPanelComponent, canActivate: [UserAuthGuard]},
  {path: 'login', component:LoginViewComponent},
  {path: 'error', component:InternalErrorComponent},
  {path: 'unauthorized', component:UnauthorizedComponent},
  {path: '**', component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
