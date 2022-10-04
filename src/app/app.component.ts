import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'entra21-angular-tatiani';

  constructor(private router: Router) { }

  public irParaTelaListagemVacinas(){
    this.router.navigate(['/vacinas']);
  }

  public irParaTelaCadastroVacinas(){
    this.router.navigate(['/vacinas/detalhe']);
  }
  public irParaTelaListagemPesquisadores(){
    this.router.navigate(['/pesquisadores']);
  }

  public irParaTelaCadastroPesquisadores(){
    this.router.navigate(['/pesquisadores/detalhe']);
  }
}
