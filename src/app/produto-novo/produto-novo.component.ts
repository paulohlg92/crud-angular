import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {

  productForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
   'nome_produto' : [null, Validators.required],
   'desc_produto' : [null, [Validators.required, Validators.minLength(4)]],
   'preco_produto' : [null, Validators.required]
 });
 }

  
 addProduto(form: NgForm) {
  this.isLoadingResults = true;
  this.api.addProduto(form)
    .subscribe(res => {
        const id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/produto-detalhe', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
}
}