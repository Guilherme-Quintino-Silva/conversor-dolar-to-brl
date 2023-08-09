import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monetary } from './model/monetary.model';

@Injectable({
  providedIn: 'root'
})
export class MoedasCotacaoService {
  private API = `http://economia.awesomeapi.com.br/json/last/USD-BRL`;
  constructor(
    public http: HttpClient,
  ) { }

  public consumeMonetary(): Observable<Monetary> {
    return this.http.get<Monetary>(this.API);
  }
}
