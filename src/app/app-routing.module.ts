import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'empresa-list', loadChildren: './pages/empresa-list/empresa-list.module#EmpresaListPageModule' },
  { path: 'empresa-form', loadChildren: './pages/empresa-form/empresa-form.module#EmpresaFormPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
