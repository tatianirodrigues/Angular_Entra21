import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly API = 'http://localhost:8080/api/pesquisadores'; //endpoint do servidor (backend)

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(this.API);
  }

  salvarPessoa(pessoa: Pessoa): Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.API, pessoa);
  }
}
