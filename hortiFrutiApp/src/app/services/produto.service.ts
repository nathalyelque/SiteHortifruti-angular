import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  enderecoDoServidor = 'http://31.220.57.121:9080/produtos';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor);
  }

  cadastrar(produto: Produto) {
    return this.http.post(this.enderecoDoServidor, produto);
  }
}


