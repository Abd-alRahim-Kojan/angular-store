import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cartCount = new BehaviorSubject<number>(0);
  currentCartCount = this.cartCount.asObservable();

  constructor() {
    this.loadInitialCount();
  }

  loadInitialCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartCount.next(cart.length);
  }

  incrementCount() {
    this.cartCount.next(this.cartCount.value + 1);
  }

  decrementCount() {
    this.cartCount.next(this.cartCount.value - 1);
  }
}
