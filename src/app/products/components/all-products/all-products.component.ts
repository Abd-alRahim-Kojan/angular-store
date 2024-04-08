import { Component, HostListener, NgZone } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
})
export class AllProductsComponent {
  products: Product[] = [];
  categories: string[] = [];
  searchValue: string = '';
  cartProducts: any[] = [];
  loading: boolean = false;
  isMenuOpen: boolean = false;
  

  constructor(private ngZone: NgZone, private service: ProductsService) {
    this.onResize();
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
      }
    });
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

  checkProductCategory(name: string): void {
    this.loading = true;
    this.service.getProductsByCategory(name).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.products = res;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        this.products = [];
      },
    });
  }

  public onSearchChange(): void {
    this.loading = true;
    if (this.searchValue === '') {
      this.getProducts();
      this.loading = false;
    } else {
      this.checkProductCategory(this.searchValue);
      this.loading = false;
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
