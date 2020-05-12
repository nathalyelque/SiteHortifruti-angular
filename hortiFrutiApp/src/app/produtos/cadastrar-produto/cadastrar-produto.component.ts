import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtoService.cadastrar(this.produto).subscribe((resp: Produto) => {
      location.assign('/nossos-produtos');
    })
  }

}
