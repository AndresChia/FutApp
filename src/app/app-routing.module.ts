import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from "./../services/autentication/login.guard";


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./../app/components/login/login.module').then( m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
