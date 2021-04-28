import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Produto} from 'src/models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'desc', 'preco', 'acao'];
  dataSource: Produto[];
  isLoadingResults = false;

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this._api.getProdutos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    },
    err => {
      console.log(err);
      this.isLoadingResults = false;
    }
    )
    }

}
