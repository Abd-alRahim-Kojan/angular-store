import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CartsService } from '../../../carts/services/carts.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
})
export class AllProductsComponent {
  products: Product[] = [];
  categories: string[] = [];
  cartProducts: any[] = [];
  loading: boolean = false;
  isMenuOpen: boolean = false;
  p: number = 1;

  constructor(
    private service: ProductsService,
    private cartService: CartsService
  ) {}

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

  handleSearchChange(searchValue: string) {
    this.loading = true;
    if (searchValue === '') {
      this.getProducts();
    } else {
      this.checkProductCategory(searchValue);
    }
    this.loading = false;
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id === event.item.id
      );
      if (exist) {
        alert('Product is already in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        this.cartService.incrementCount();
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.cartService.incrementCount();
    }
  }

  removeFromCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id === event.item.id
      );
      if (exist) {
        this.cartProducts = this.cartProducts.filter(
          (product) => product.item.id !== event.item.id
        );
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        this.cartService.decrementCount();
        alert('Product removed!');
      } else {
        alert('Product is not in your cart');
      }
    }
  }
}
