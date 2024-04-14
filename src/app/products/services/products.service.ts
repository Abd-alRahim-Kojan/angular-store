import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }

  getProductById(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }
}
