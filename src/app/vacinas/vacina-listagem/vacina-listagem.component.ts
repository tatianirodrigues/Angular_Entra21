import { VacinasService } from './../../shared/service/vacinas.service';
import { Component, OnInit } from '@angular/core';
import { Vacina } from 'src/app/shared/model/vacina';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})
export class VacinaListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paisOrigem', 'estagio', 'dataInicio', 'responsavel'];
  public dataSource: Array<Vacina> = new Array();
  constructor(private vacinaService: VacinasService) { }

  ngOnInit(): void {
    //Similar ao método main() em Java
    this.pesquisarTodas();
  }

  private pesquisarTodas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.dataSource = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }
}
