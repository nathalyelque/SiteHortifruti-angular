import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-nossos-produtos',
  templateUrl: './nossos-produtos.component.html',
  styleUrls: ['./nossos-produtos.component.css']
})
export class NossosProdutosComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.obterTodosOsProdutos();
  }

  obterTodosOsProdutos() {
    this.produtoService.obterTodos().subscribe((resp: Produto[]) => {
      this.produtos = resp
    });
  }

}
