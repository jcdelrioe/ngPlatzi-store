import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {
    const newProduct: Product = {
      id: '123',
      title: 'Nuevo desde angular',
      image: 'assets/images/mug.png',
      price: 54321,
      description: 'Producto nuevo desde angular'
    }
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 4321,
      description: 'Nueva descripcion blabla'
    }
    this.productsService.updateProduct('5', updateProduct)
    .subscribe(product => {
      console.log(product);
    })
  }
  deleteProduct() {
    this.productsService.deleteProduct('123')
    .subscribe(rta => {
      console.log(rta);
    })
  }

}
