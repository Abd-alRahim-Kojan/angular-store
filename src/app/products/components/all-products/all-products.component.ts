import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent {
  products: Product[] = [];
  categories: string[] = [];
  searchValue: string = '';
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading = false;
      },
      error: (error) => {
        console.error(error.message);
        this.loading = false;
      },
    });
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      error: (error) => {
        console.error(error.message);
        this.loading = false;
      },
    });
  }

  checkProduct(name: string): void {
    this.service.getProductsByCategory(name).subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.products = res;
        }, 700);
      },
      error: (err) => {
        console.error(err);
        this.products = [];
      },
    });
  }

  public onSearchChange(): void {
    if (this.searchValue === '') {
      this.getProducts();
    } else {
      this.checkProduct(this.searchValue);
    }
  }

  // filterCategory(event: any) {
  //   let value = event.target.value;
  //   console.log(value);
  //   value === 'all' ? this.getProducts() : this.getProductsCategory(value);
  // }
  // getProductsCategory(keyword: string) {
  //   this.loading = true;
  //   this.service.getProductsByCategory(keyword).subscribe({
  //     next: (res: any) => {
  //       // Update Products array
  //       this.products = res;
  //       this.loading = false;
  //     },
  //     error: (error) => {
  //       console.error(error.message);
  //       this.loading = false;
  //     },
  //   });
  // }
}
