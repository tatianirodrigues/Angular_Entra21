import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    PessoaDetalheComponent,
    PessoaListagemComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppMaterialModule
  ]
})
export class PessoasModule { }
