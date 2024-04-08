import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [AllProductsComponent, ProductDetailsComponent, ProductComponent],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
})
export class ProductsModule {}
