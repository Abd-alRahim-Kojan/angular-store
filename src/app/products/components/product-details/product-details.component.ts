import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  id: any;
  data: any = {};
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.data = res;
      },
      error: (error) => {
        console.error(error.message);
        this.loading = false;
      },
    });
  }
}
