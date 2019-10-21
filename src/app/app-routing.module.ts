import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginService } from './pages/services/login.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login', loadChildren: './pages/login/login.module#LoginPageModule',
    canLoad: [LoginService]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  { path: 'empresa-list', loadChildren: './pages/empresa-list/empresa-list.module#EmpresaListPageModule' },
  { path: 'empresa-form', loadChildren: './pages/empresa-form/empresa-form.module#EmpresaFormPageModule' },
  { path: 'empresa-form/:key', loadChildren: './pages/empresa-form/empresa-form.module#EmpresaFormPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
