import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../shared/service/pessoas.service';
import { Pessoa } from './../../shared/model/pessoa';
import { VacinasService } from './../../shared/service/vacinas.service';
import { Vacina } from '../../shared/model/vacina';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit {

  public idVacina: number;
  public vacina: Vacina = new Vacina();
  public pessoas: Pessoa[] = new Array();

  constructor(private pessoasService: PessoasService,
              private vacinasService: VacinasService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //TODO verificar se a rota chamada tem id
    //caso sim -> buscar a vacina no backend
    this.pesquisarTodas();

     this.route.params.subscribe( params =>{
       this.idVacina = params['id'];

       if(this.idVacina){
        this.buscarVacina();
       }
   })
  }

  buscarVacina(){
    this.vacinasService.buscarPorId(this.idVacina).subscribe(
      resultado =>{
        if(resultado){
          this.vacina = resultado;
        }else{
          alert('Vacina não encontrada');
        }
      }
    );
  }
  pesquisarTodas(){
    this.pessoasService.listarTodos().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  salvar(){

    if(this.idVacina){
      this.vacinasService.atualizar(this.vacina).subscribe(
        resultado => {
          this.vacina = resultado;
          alert("Vacina atualizada com sucesso");
          this.limpar();
        },
        erro => {
          console.log("DEU ERRO. Causa: " + erro);
          alert("Erro: " + erro.error.message);
        }
      );
    }else{
      this.vacinasService.salvar(this.vacina).subscribe(
        resultado => {
          this.vacina = resultado;
          //TODO evoluir para mostrar mensagem na tela
          alert("Vacina salva com sucesso");
          this.limpar();
        },
        erro => {
          //TODO evoluir para mostrar mensagem na tela
          console.log("DEU ERRO. Causa: " + erro);
          alert("Erro: " + erro.error.message);
        }
      );
    }

  }

  limpar(){
    this.vacina = new Vacina();
  }
}
