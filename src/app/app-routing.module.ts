import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LoginComponent, RegisterComponent, HomeComponent } from '@mean/public';
import { HomeAuthGuard, LoginAuthGuard } from "./guards";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomeAuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard]
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
