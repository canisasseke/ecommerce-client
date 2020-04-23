import { Component, OnInit } from '@angular/core';
import { Product } from '../_shared/models/product';
import { RepositoryService } from '../_shared/services/repository.service';
import { ErrorHandlerService } from '../_shared/services/error-handler.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private productService: RepositoryService, private handleErrorService: ErrorHandlerService) { }

  ngOnInit(): void {
    const apiurl = 'products';
    this.productService.getData(apiurl).subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        this.handleErrorService.handleError(error);
      }
    );
  }

}
