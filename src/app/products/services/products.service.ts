import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private searchValue = new BehaviorSubject<string>('');

  // Other components can subscribe to this Observable to get updates
  currentSearchValue = this.searchValue.asObservable();

  updateSearchValue(value: string) {
    this.searchValue.next(value);
  }
  
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }

  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getProductsByCategory(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword);
  }

  // getProductById(id: any) {
  //   return this.http.get(environment.baseApi + 'products/' + id);
  // }

  // getProductByNameOrCategory(nameOrCategory: string): Observable<any> {
  //   // Implement the API call here to get the product by name or category
  // }
}
