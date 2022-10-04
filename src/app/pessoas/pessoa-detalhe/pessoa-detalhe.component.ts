import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss']
})
export class PessoaDetalheComponent implements OnInit {

  public pessoa: Pessoa = new Pessoa();
  constructor( private PessoasService: PessoasService) { }

  ngOnInit(): void {
  }

  salvarPessoa(){
    this.PessoasService.salvarPessoa(this.pessoa).subscribe(
      resultado => {
        this.pessoa = resultado;
        //TODO evoluir para mostrar mensagem na tela
        alert("Pesquisador salvo com sucesso");
        this.limpar();
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
        alert("Erro: " + erro.error.message);
      }
    );
  }

  limpar(){
    this.pessoa = new Pessoa();
  }

}
