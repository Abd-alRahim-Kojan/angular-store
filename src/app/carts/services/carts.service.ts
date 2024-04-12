import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cartCount = new BehaviorSubject<number>(0);
  currentCartCount = this.cartCount.asObservable();

  constructor(private http:HttpClient) {
    this.loadInitialCount();
    
  }

  createNewCart(model:any) {
    return this.http.post(environment.baseApi + 'carts' , model )
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
