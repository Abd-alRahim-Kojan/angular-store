import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
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

  getProductByName(name: string): Observable<any> {
    return this.http.get(environment.baseApi + '/products?name=' + name);
  }

  getProductById(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }

  // getProductByNameOrCategory(nameOrCategory: string): Observable<any> {
  //   // Implement the API call here to get the product by name or category
  // }
}
