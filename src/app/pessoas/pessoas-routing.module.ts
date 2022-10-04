import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';

const routes: Routes = [
  { path: '', component: PessoaListagemComponent},
  { path: 'detalhe', component: PessoaDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
