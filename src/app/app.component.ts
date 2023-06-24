import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products'
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public productsService: ProductsService,
              public modalService: ModalService) {
  }

  term = '';
  loading = false;

  title = 'angular-app';

  products: IProduct[] = [];

  ngOnInit(): void {
    this.loading = true;

    // this.productsService.getAll().pipe(
    //   tap( () => this.loading = false)
    // );

    this.productsService.getAll().subscribe(products => {
      this.loading = false;
    })

  }
}
