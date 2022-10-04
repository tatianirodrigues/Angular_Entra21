import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '', redirectTo: 'vacinas', pathMatch:'full'},
  {
    path: 'vacinas',
    loadChildren:() => import('./vacinas/vacinas.module').then(m => m.VacinasModule)},
  {
    path: 'pesquisadores',
    loadChildren:()  => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
