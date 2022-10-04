import { Vacina } from './../model/vacina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  private readonly API = 'http://localhost:8080/api/vacinas'; //endpoint do servidor (backend)

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<Vacina[]>{
    return this.httpClient.get<Vacina[]>(this.API);
  }

  buscarPorId(id: number): Observable<Vacina>{
    return this.httpClient.get<Vacina>(this.API + '/' + id);
  }

  salvar(vacina: Vacina): Observable<Vacina>{
    return this.httpClient.post<Vacina>(this.API, vacina);
  }

  atualizar(vacina: Vacina): Observable<Vacina>{
    return this.httpClient.put<Vacina>(this.API, vacina);
  }
}
