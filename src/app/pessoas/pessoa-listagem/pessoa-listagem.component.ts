import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../shared/service/pessoas.service';
import { Pessoa } from '../../shared/model/pessoa';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.scss']
})
export class PessoaListagemComponent implements OnInit {

  displayedColumns: string[] = ['id','nome', 'cpf', 'matricula', 'dataNascimento'];
  public pessoasSource: Array<Pessoa> = new Array();
  constructor(private pessoasService: PessoasService) { }


  ngOnInit(): void {
    this.pesquisarTodos();
  }

  private pesquisarTodos(){
    this.pessoasService.listarTodos().subscribe(
      resultado => {
        this.pessoasSource = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
    }
}
